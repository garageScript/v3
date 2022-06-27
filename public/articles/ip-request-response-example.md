# What's just happened!?

What happened when you put a **url** (i.e `<%= ipUrl %>`) into the url bar and hit "enter"?

## Receiving Your Request on Device

The browser sends a request that goes to the router and then to the modem. The most important part of the URL is called the **hostname**, which tells the modem where to send the request to. In the url, the hostname is `<%= myIp %>`. This is the external ip address given to me when I signed up for internet service with my ISP.

Your External Ip is: `<%= reqIp %>` and let's assume your local IP is <%= exampleLocalIp %>.

<%= graphs[0] %>

1. When you typed <%= ipUrl %> into the browser, a request is sent, first to the router.
2. The router will take note of your local IP <%= exampleLocalIp %> and the url you are sending the request to (`<%= ipUrl %>`). This way, when you receive a response back, the router will know to send the response to your device instead of another device.
3. The request goes out the modem, into the internet, and eventually ends up in my home and into the modem because of the hostname (`<%= myIp %>`)
4. Since the modem is connected to the router, the request goes into the router

Normally, your request would die there because the router does not know which one of my device it should send the request to.

To make sure my computer receives incoming request from the router, I went to the router's admin page and configured **port forwarding**. The router will look at the **port number** specified in the url, `<%= externalPort %>`.

![port forwarding admin](https://v3.amayz.dev/public/photos/uploads/port-forwarding.png)

This is telling the router that whenever the router receives a request on port 8035, forward the request to `192.168.0.21` on port 3035. `192.168.0.21` is a **static local ip address** I configured on my router for my computer.

<%= graphs[1] %>

Because of port forwarding, the router will look at the request port number (<%=externalPort %>) and forwards the request to `192.168.0.21:3035`

## Receiving Your Request on Application

My computer is going to be receiving requests on port `3035` so I need to create an application that listens to requests on port `3035` and sends back a response. 

You can build 

```js
const http = require("http");

const requestListener = function (req, res) {
  return res.send(`
      <link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css">
      <article>
      <h1>What's just happened!?</h1>
      <p>What happened when you put a <strong>url</strong> (i.e <code>69.181.248.93:8035</code>) into the url bar and hit &quot;enter&quot;?</p>
      <h2>Receiving Your Request on Device</h2>
      ...
      </article>
  `)
};

const server = http.createServer(requestListener);

server.listen(3035)
```

