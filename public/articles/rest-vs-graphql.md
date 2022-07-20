# Rest vs GraphQL

# Intro / Goal

The goal of this document is to help you understand REST and GraphQL so that you can pick the right tool for what you are trying to accomplish.

To accomplish this goal, this document will go over the history behind REST and GraphQL so you understand the different use cases that each technology is solving for.

# History - REST

Before Graphql was invented and used in 2012, clients communicated with Server APIs using REST interface. 

{% sideBySide %}
![rest](https://v3.amayz.dev/uploads/rest.jpg) 

---

For example, if the client needs to display a list of books, they would get a list of books by sending a GET request to `/books`
{% /sideBySide %}

Generally, for a book resource, the REST interface defined a standard for how clients communicate with the API:

{% table %}
* Action
* API
---
* Get all books
* `GET` request to `/books`
---
* Get 1 specific book
* `GET` request to `/books/5` where `5` is the book id
---
* Create a book resource
* `POST` request to `/books` with book information in the body
---
* Edit a book
* `PATCH` request to `/books/5` where `5` is the book id you want to edit with the fields you want to edit in the body
---
* Replace exsting/create a book
* `PUT` request to `/books/5` where `5` is the book id you want to replace. If the resource does not exist, create the resource.
---
* Delete a specific book
* `DELETE` request to `/books/5` where `5` is the book id.


{% /table %}

APIs are expected to follow these conventions. REST also specifies how the server should respond back the the above queries with HTTP Status Codes:

{% table %}
* Status Code
* Meaning
---
* `200`
* OK. Action was successful. Make sure to include the modified resource in the response body.
---
* `400` 
* Bad request
---
* `404` 
* resource not found
{% /table %}

## Pros/Cons of REST

### Pros

The introduction of a RESTful API solves a few problems:

* Standardization allows Developers to understand APIs quickly. When working with a resource developers generally know what requests and responses will look like.
* Decouple UI from Server. UI can now focus on UI, and Server can focus on managing data.
* Allows microservices. This allows teams to break resources into services and scale horizontally.

### Cons

As UI becomes more complicated and companies grow in size, problems start to arise with REST.

**Outdated Documentation** - Any team that scales with REST will need to put a documentation process in place. Not all teams are vigilant about that and documentation will go out of sync with the API spec. For example, an engineer will change a property name in the response and forget to update the documentation because documentation and code usually live separate folders / repos.


{% sideBySide %}
![bookstore UI](https://v3.amayz.dev/uploads/bookstoreUI.jpg) 

---

**Number of API Requests**: In this UI, there are 3 resources: /books, /accessories, /authors, so the browser needs to send 3 requests for the page to load. Having to send multiple requests to load data a page is not ideal because network request is often the main bottleneck in performance,

**API Design**: The book resource needs to display the author name. But what if /books returns a book resource that contains the authorId instead of the author information?

```
{
  title: 'book1',
  ...
  authorId: 5,
  publishYear: 2022
}
```

Sending subsequent `/authors/:authorId` requests for each book leads to excessive requests, which leads to decreased performance and creates extra load for the server.
{% /sideBySide %}

**Data Selection**: Sometimes the UI does not need all the resource information. For example, books may contain publishedYear property that the UI does not display. This could lead to larger than necessary network requests, affecting performance.

### Workaround

A solution to the problems above is to add another API endpoint for communicating with your app

{% sideBySide %}
![rest solution](https://v3.amayz.dev/uploads/restSolution.jpg)
---

The `/homepage` endpoint will be responsible for providing exactly the data the page needs above.

This solves the problem of excessive API requests and sending unnecessary data that the front end does not need.
{% /sideBySide %}

The drawback of this approach is that we are creating additional endpoints that are **tightly coupled** with the needs of the front end, which negates one of the benefits of having a RESTful API in the first place. As the front end requirements change, the API would also need to change accordingly.

# GraphQL

Graphql is designed to keep the benefits of REST

* Allows Developers to understand APIs quickly.
* Decouple UI from Server. UI can now focus on UI, and Server can focus on managing data.
* Allows microservices. This allows teams to break resources into services and scale horizontally.

It also solves all the shortcomings of rest, which we will cover one by one as we learn about the different features of GraphQL.

{% sideBySide %}
![graphql architecture](https://v3.amayz.dev/uploads/graphql-service.jpg)
---

Having a GraphQL API does not mean you don’t use REST at all. 

You could still have RESTful services that allows your backend to scale horizontally quickly.

This shows a sample architecture of a web application.
{% /sideBySide %}


## Client

The most common GraphQL tooling is called a **GraphQL Playground**. You can play around with a [playground](https://graphql.amayz.dev/graphql)

Full code is available here (https://graphql.amayz.dev/index.js)

{% sideBySide %}
![graphql playground](https://v3.amayz.dev/uploads/graphql-playground.jpg)
---
1. Docs displays and explains the all the data that GraphQL supports. Using the docs, you can generate queries.
2. The Queries section lets you write the GraphQL query that you want to send to the server. This is the request body that you would put in your client side code. In the image, the query is asking for:
    1. A list of books. For each book, we want the author information (the name)
    2. A list of accessories. For each accessory, we want the name.
    3. A specific book with the Id 2. We want the book’s title and author’s first name
3. The Response section will display the JSON response that the server sends back.
{% /sideBySide %}

As you can see, we get to specify exactly the attributes we want and we get all the information we want in one request. For each data (like Book), we can get the deeper nested object (like Author) information without sending additional requests. 

## Development

When building out a GraphQL server, there are many libraries to choose from (in contrast to REST development where you could get started without any library). 
You can find language specific libraries from the [graphql site](https://graphql.org/code/).

There are two main components of creating a GraphQL server: **TypeDefs** and **Resolvers**

### TypeDefs

Represents Type Definition. 
It is a string that specifies the data that is available to the client.
For each data point, you can add additional information that will show up as additional documentation.

The benefit of this is that your GraphQL API will always have consistent and up to date documentation. This is difficult to achieve for large APIs without proper tooling when using REST.

Here is the typedef string for our example:

```
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  "A written or printed work consisting of pages glued or sewn together along one side and bound in covers."
  type Book {
    """
    Every book must have a title. Multiple books can have the same title.

    * Example of a book title: [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
    * Keep in mind, a book can only have 1 title
    * Some books may be part of a chain, like Harry Potter and the Sorcerer's stone, Harry Potter and the Globet of fire belong to the same Harry Potter series
    """
    title: String
    """
    A book must have at least 1 author.
    Sometimes, multiple authors can collaborate on the same book.
    """
    id: Int
    authors: [Author!]!
    publisher: String
    publishedYear: Int
  }

  "An accessory is an item that helps readers enjoy their reading experience and improves their reading experience"
  type Accessory {
    name: String
    id: Int
  }

  "An author is someone who participated in the writing of the book"
  type Author {
    """
    The name field is constructed like the following: firstname + lastname.
    """
    name: String
    firstName: String
    lastName: String
    dateOfBirth: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    getBook(id: Int!): Book
    authors: [Author]
    accessories: [Accessory]
  }
```

The typedef above specifies the data types used in the API (Book, Accessory, Author), then defines the different Queries that the client can request for (all book, all authors, all accessories, and a specific book). From the typedef above, GraphQL Playground library automatically generates the following documentation:
![ graphql documentation ](https://v3.amayz.dev/uploads/graphql-documentation.jpg)

### Resolvers

Resolves are functions that you specified in the your typeDefs . According to the typedefs above, you would need resolvers for books, getBook, authors, and accessories. 
When writing your resolver functions, you can return the full data. The GraphQL library will automatically filter out the properties that the client specified in their query before sending a response.

## Differences with REST

Now that you understand the basics of GraphQL, let’s compare and note the differences between the GraphQL and Rest

1. All GraphQL queries are sent as `POST` requests. A developer using REST can guess what the request is trying to do by looking at the request method. With Graphql you have to always read the docs.
2. All GraphQL responses status codes are `200`. A developer using REST can get an idea of what happened based on the status code. With Graphql you have to read the response and look for an error key.

# Conclusion

When picking a technology, you should always pick the right tools for the right job. Based on the pros and cons of each, each has benefits that outweigh the other for different use cases. 

## REST

You should use REST when building out a microservice that manage distinct resources. This allows you to leverage the RESTful standard to build an API that is lean, easy to scale horizontally, and makes sense to developers

Using GraphQL to build simple microservices adds unnecessary overhead. 

## GraphQL

You should use GraphQL to support complex requests. This may come from clients that needs to query nested resources and / or multiple resources in one request.

Using REST to support complex requests would add unnecessary code bloat and you would be managing alot of extra code that GraphQL already solves. 

## Combination

It is very common to use both GraphQL and REST in your architecture. Many systems uses GraphQL as a gateway for client requests to be able to support all usecases. To keep this GraphQL gateway lean, each resolver will query the corresponding microservices using REST. Having a lean GraphQL gateway allows it to scale horizontally. In combination, each of your components can scale accordingly based on usage. 

![graphql architecture](https://v3.amayz.dev/uploads/graphql-service.jpg)

