# Welcome back!

To get here, you have typed **{% $myIp %}:{% $externalPort %}** into the url bar. 

![ip url](https://v3.amayz.dev/uploads/ip-url.png)

This section will guide you through what happens next, step by step, starting with the **url**.

# URL
The url you typed in ( *{% $myIp %}:{% $externalPort %}* ) is made up of 2 parts. 
* **{% $myIp %}** is called the **hostname**, which is my Ip address. 
* **{% $externalPort %}** is called the **port**.
This is important only **after** the request has arrived at my modem.

{% mermaid %}
graph LR
A[Your Computer] --> |Sends a request| B(Modem: {% $reqIp %})
B --> C(The Internet)
C --> D(Modem: {% $myIp %})
D --> E(My Computer)
{% /mermaid %}

After putting **{% $myIp %}:{% $externalPort %}** into the url bar, the browser will create a request and send it out to the ip address *{% $myIp %}*.
This request will arrive at my modem and then end up at my computer.

# Code

To be able to handle your incoming request, I need to write some code to tell the computer what to do. 
Any code that tells the computer what to do is called an **application**.

![folder image](http://69.181.248.93:8035/uploads/appfolder-zombie.png)
To write code, I created a folder called *website* (I could have named the folder whatever I wanted) and created a file inside the folder called `zombie` using a text editor (I could have named the file whatever I wanted).
The most common editor used to write code currently is [vscode](https://code.visualstudio.com/)

## Editor
Why do you need a text editor? Why can't you just use microsoft word?

![microsoft word](http://69.181.248.93:8035/uploads/helloThereWord.jpg)
The reason is that editors like Microsoft Word allows **rich text editing**, meaning you can add styles to your text by changing the font size, making it bold, setting margins, etc. 
So if you write `Hello there! How are you doing?` into Microsoft Word and save the file as (`hello.docx`), Microsoft Word will write into `hello.docx` in a way that only Microsoft Word will understand, preserving all your text styles.

![microsoft word output](http://69.181.248.93:8035/uploads/helloThereTxt.jpg)
The content that gets saved into `hello.docx` file actually looks like the above. Gibberish that only Microsoft Word understands. 

Unlike rich text editors like Microsoft Word, a text editor like [vscode](https://code.visualstudio.com/) will contain exactly what you write.
So if I wrote `Hello there! How are you doing?` and save, the file will contain exactly `Hello there! How are you doing?`.

## Files and sizes
Now that you understand why we write code in a text editor, let's talk about file sizes!

Each character in a file takes up 1-2 bytes, most of them 1 byte.
For example, if you write the following into a file (ignore the line numbers, they are there to help you see that there are two lines)

```
Hello World
How are you?
```

the file would be a little more than 24 bytes. Don't forget that spaces and **new line** (between `World` and `How`) counts as characters too!)

A file can be get big. Instead of `50,000,000 bytes` we say the file is `50 megabytes`.
Here is the conversion table:

{% table %}
* Bytes
* Conversion
---
* 1024 bytes
* 1 kilobyte (1KB)
---
* 1,048,576 bytes
* 1 megabyte (1MB)
---
* 1,073,741,824 bytes
* 1 gigabyte (1GB)
---
* 1,099,511,627,776 bytes
* 1 terabyte (1TB)
---
* 1,125,899,906,842,624 bytes
* 1 petabyte (1PB)
{% /table %}

After petabyte, it is Exa Byte, then Zetta Byte, then Yotta Byte. You don't have to know them.

For simplicity, instead of using dividing and multiplying by 1024 when converting bytes, we usually just use 1000 because it is easier.



## Editor
To write code, you 




```js
const http = require("http");

const htmlString = `
  <link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css">
  <article>
  <h1>What's just happened!?</h1>
  <p>What happened when you put a <strong>url</strong> (i.e <code>69.181.248.93:8035</code>) into the url bar and hit &quot;enter&quot;?</p>
  <h2>Receiving Your Request on Device</h2>
  ...
  </article>
`

const requestListener = function (req, res) {
  res.send(htmlString)
};

const server = http.createServer(requestListener);

server.listen(3035)
```





# To be Added in later

In our case, your browser will automatically add a `http` protocol by putting `http://` in front of our url, changing the url to:

**http://{% $myIp %}:{% $externalPort %}** {% .text-center %}

This url has the following parts:
* **Protocol** (http) - The url above is using the http protocol. 
If you do not specify a protocol, the browser will automatically insert **http** or **https** protocol.
A protocol specifies what information the request and response will have and how they are structured.
For example, the `http` protocol specifies that all requests and responses must have a header section and the information that request headers and response headers must contain.
Other common protocols (I'm only listing the common ones that you may be expected to know)
  * DNS - Protocol used for getting the public IP address from a domain name. (covered in later section)
  * FTP - Protocol used specifically for sending files. You can also send files using the http protocol.
  * SMTP - When you send someone an email, the email request is sent following the SMTP protocol.
  * SSH - Protocol used for accessing computers using the terminal. 
* **hostname** ({% $myIp %}) - Helps determine which computer to send the request to. This is required in the url because the browser needs to know where to send the request to.
* **port** ({% $externalPort %}) - Helps determine which application to handle the request **after** the request arrives at the destination. This is not required. Every protocol has a default port and if you don't specify a specific port, the default one is automatically used. Here are the ports used for the common protocols:
  * DNS - 53
  * FTP - 21
  * HTTP - 80
  * HTTPS - 443
  * SMTP - 25
  * SSH - 22

{% exercise exerciseId="urlIdentification1" articleName=$articleName %}
{% /exercise %}

Assuming that your computer is directly connected to the modem and my computer is directly connected to the modem.
What happens after you typed **{% $myIp %}:{% $externalPort %}** into the url bar?

First the browser adds the `http` protocol so the url becomes 

**http://{% $myIp %}:{% $externalPort %}** {% .text-center %}


{% slideShow %}

# slide
{% sideBySide %}

{% mermaid %}
graph LR
A[Your Computer] -->|1. Prepares and sends a request| B(Modem)
{% /mermaid %}

---

The protocol is `http` and the browser prepares a request to be sent out.
As part of the http protocol, the request will contain 2 fields:
1. Destination: Where the request is going to, which is my ip address: **{% $myIp %}:{% $externalPort %}**
2. Source: Where the request is coming from, which is your ip address:  **{% $reqIp %}**
{% /sideBySide %}

# slide
{% sideBySide %}

{% mermaid %}
graph LR
A[Your Computer] --> B(Modem: {% $reqIp %})
B -->|1. Sends a Request| C(The Internet)
{% /mermaid %}

---
The request goes out of your modem into the internet

{% /sideBySide %}

# slide
{% sideBySide %}

{% mermaid %}
graph LR
A[The Internet] --> B(Modem: {% $myIp %})
B -->|request| C(My Computer)
{% /mermaid %}

---
Your request arrives to my modem, then my computer

{% /sideBySide %}

{% /slideShow %}

Now let's recap: When you visit **{% $hostname %}**, this happens:

{% mermaid %}
graph LR
A[Your Computer] --> B(Modem)
B -->|1. Sends a Request| C({% $hostname %})
C -->|2. Sends a Response| B
{% /mermaid %}



## Router
By connecting your computer to the modem directly, your computer is the ONLY device that can use your internet! What about your phone, tablets, other computers and other devices? For this reason, almost nobody would connect their computer directly to their modem. Instead, most people will buy a router [like this one](https://www.amazon.com/NETGEAR-4-Stream-WiFi-Router-R6700AX/dp/B08KTXG8Q5/) and connect their modem's ethernet to the router

![router back](https://v3.amayz.dev/uploads/router-back.png)

With a router connected, data will now flow from the cable into the modem then to the router. As you can see in the image above, you can connect up to 4 computers via ethernet cables and even more computers via wifi! 

To setup your wifi name and password as well as other router configurations, first you need to connect your computer to the router. Once your computer is connected to the router, you can access your router's configuration page by opening your browser and typing this url: `192.168.0.1` (This url may be different depending on your router. Your router's manual will tell you which url to type in as well as the username/password). Once there, you can setup your wifi's network name and password

![router admin wifi](https://v3.amayz.dev/uploads/router-admin-wifi.png)

The reason why most wifi routers support 2 frequencies, 2.4Ghz and 5Ghz, is because when you have too many devices on wifi on the same frequency, they interfere with each other, leading to conjested / slow network.

At this point, your should be able to connect multiple devices to your router (via ethernet or wifi) and each device can use the internet.

Let's say you have 2 roommates (A and B) and they are connected to your router along with your phone. Now when you send a request to youtube from your computer:

[![](https://mermaid.ink/img/pako:eNqFkVtLxDAQhf_KkBcrbAV97IOlN0VQXLpPYnyIzWiDm6Tk4oXt_nfTNuIiC-YpnDnfmZlkRzrNkWTk1bChh9uWKgineHzQ3kCl5eAdGkjhXVjhLATZ-Wd8gjS9hDpp9VQ-XaBmgda9VscNV4uh1VpK5hCKEwtdbHEUuL7_Q5T_EfUslsld2EpGrZy08fwMNqi4BQYfwvVgQ3CHGcwNms8QodgWbtYjVEncMvLVzF_88i3aQSuLSxBH64RiTmgV06aQ8qA31IfDjXmejwVZEYlGMsHD4--mOiWuR4mUZOHKmXmjhKp98PmBh90bLpw2JHthW4srwrzTmy_VkcwZjz-mWrDwkTK69t-Si5dZ)](https://mermaid.live/edit#pako:eNqFkVtLxDAQhf_KkBcrbAV97IOlN0VQXLpPYnyIzWiDm6Tk4oXt_nfTNuIiC-YpnDnfmZlkRzrNkWTk1bChh9uWKgineHzQ3kCl5eAdGkjhXVjhLATZ-Wd8gjS9hDpp9VQ-XaBmgda9VscNV4uh1VpK5hCKEwtdbHEUuL7_Q5T_EfUslsld2EpGrZy08fwMNqi4BQYfwvVgQ3CHGcwNms8QodgWbtYjVEncMvLVzF_88i3aQSuLSxBH64RiTmgV06aQ8qA31IfDjXmejwVZEYlGMsHD4--mOiWuR4mUZOHKmXmjhKp98PmBh90bLpw2JHthW4srwrzTmy_VkcwZjz-mWrDwkTK69t-Si5dZ)

The request goes from your computer to the router, to the modem and to Youtube. Youtube will send the response back to your external ip address, which goes to your internet cable, to your modem, and then to your router. Now there are many devices connected to your router, how does the router know which devices to send the response to?

The answer is **local ip address**. Everytime a device connects to your router, your router will assign a **local ip address** to the device. The router would keep track of which device sent which request and will forward the response to the correct device.

[![](https://mermaid.ink/img/pako:eNp1kl9LwzAUxb_KJS92sJW1gmgfLOtaRVAc3ZNYH2JztcElKUnqH9Z9d9N2wyk1T-Hm_M4JJ9mSUjEkEXnVtK7gNi8kuLXwHlSjYalE3VjUUwguQj84O_fnfhDADN654daAE9nmGScwm11C6uWqE08Gi-yxt1hVSuIvfv40Jr8a5LlSQlCLsDgxUI7Fh6P49f0fPvmPPx3l036YeHeuDbGfJd2sDXxYo2QGKHxwW4FxMSVG0Mdln85C0g3crFpYeoc-Bn7Z8-EPn6OplTQ4GDE0lktquZJ7t84kOcqG9PhybRzH7YJMiUAtKGfu0bbdeUFshQILErkto_qtIIXcOV1TM9dExrhVmkQvdGNwSmhj1fpLliSyusGDKOXUfQCxV-2-AQu8oYA)](https://mermaid.live/edit#pako:eNp1kl9LwzAUxb_KJS92sJW1gmgfLOtaRVAc3ZNYH2JztcElKUnqH9Z9d9N2wyk1T-Hm_M4JJ9mSUjEkEXnVtK7gNi8kuLXwHlSjYalE3VjUUwguQj84O_fnfhDADN654daAE9nmGScwm11C6uWqE08Gi-yxt1hVSuIvfv40Jr8a5LlSQlCLsDgxUI7Fh6P49f0fPvmPPx3l036YeHeuDbGfJd2sDXxYo2QGKHxwW4FxMSVG0Mdln85C0g3crFpYeoc-Bn7Z8-EPn6OplTQ4GDE0lktquZJ7t84kOcqG9PhybRzH7YJMiUAtKGfu0bbdeUFshQILErkto_qtIIXcOV1TM9dExrhVmkQvdGNwSmhj1fpLliSyusGDKOXUfQCxV-2-AQu8oYA)

Keep in mind that your device's local ip address may change when you disconnect / reconnect from your router.
For example, when you leave the house for work (disconnect) in the morning and then return home in the evening and your phone reconnects, it will usually have a different local ip address. 
You can configure a **static ip address** for your device so that the router remembers your device and gives you the same ip address when your device connects to the router. 

[![](https://mermaid.ink/img/pako:eNp1kU1PwzAMhv-K5Qub1FbrQAhyQNroQJyoNi5o4RAaQyNIUqUOEpr238k-kAAVn3x4nteWvcHGa0KBr0F1LTxU0kGq2ejRxwDX3naRKWRQXk6L8vyimBRlCTl8mN5wDwni-ExjyPMrqEZLv4PHh4jFeh9Rt97RL3_yNITfHPCl99YqJpid9NAMjZ8O6rf3f_z5f_7poD9f18G4PbtixaaBu1r81M6OmnSYoaVgldHpbJudLpFbsiRRpFar8CZRum3iYqfTLgtt2AcUL-q9pwxVZL_6dA0KDpG-ocqo9AJ7pLZfUPd6wg)](https://mermaid.live/edit#pako:eNp1kU1PwzAMhv-K5Qub1FbrQAhyQNroQJyoNi5o4RAaQyNIUqUOEpr238k-kAAVn3x4nteWvcHGa0KBr0F1LTxU0kGq2ejRxwDX3naRKWRQXk6L8vyimBRlCTl8mN5wDwni-ExjyPMrqEZLv4PHh4jFeh9Rt97RL3_yNITfHPCl99YqJpid9NAMjZ8O6rf3f_z5f_7poD9f18G4PbtixaaBu1r81M6OmnSYoaVgldHpbJudLpFbsiRRpFar8CZRum3iYqfTLgtt2AcUL-q9pwxVZL_6dA0KDpG-ocqo9AJ7pLZfUPd6wg)

If you have a printer than you can connect to the router, it is a good idea to give it a static ip address so that you  don't have to re-setup your printer everytime when its local ip address change

If you are sharing the internet with 5 roommates and every day at 8pm all of you watch your favorite shows on your own computer.  When you watch a video in 1080p, you use [5 megabits / second](https://help.netflix.com/en/node/306). What is the minimum download speed you need to make sure everyone is happy?


## LAN

Routers can be very useful even without a modem and internet service because devices that are connected to the same router can all talk to each other. When you have a bunch of devices connected to a router without internet access, you have a Local Area Network (LAN)

[![](https://mermaid.ink/img/pako:eNqF0T0LwjAQBuC_Em6xhVqsX2gGQaxVV3UR4xCaU4umKWkySPG_G1EXCfSmg3ufG-4ayJVAoHDRvLqSfcpK4moeHJTVZKFkZQ3qiCTTfpyMJ3EvTpKQdLszkgZb9Z6FH7E8ZrrAUpB5pya5z_VPPpe1uoHXrVrd0OvWrW7kdZtWN_5zEIFELXkh3Hmb9xYG5ooSGVDXCq5vDFj5dDlbCW5wKQqjNNAzv9cYAbdG7R5lDtRoi79QWnD3KvlNPV_5yIRS)](https://mermaid.live/edit#pako:eNqF0T0LwjAQBuC_Em6xhVqsX2gGQaxVV3UR4xCaU4umKWkySPG_G1EXCfSmg3ufG-4ayJVAoHDRvLqSfcpK4moeHJTVZKFkZQ3qiCTTfpyMJ3EvTpKQdLszkgZb9Z6FH7E8ZrrAUpB5pya5z_VPPpe1uoHXrVrd0OvWrW7kdZtWN_5zEIFELXkh3Hmb9xYG5ooSGVDXCq5vDFj5dDlbCW5wKQqjNNAzv9cYAbdG7R5lDtRoi79QWnD3KvlNPV_5yIRS)

This is very common in gaming. A bunch of friends will get together with their laptops, connect to the same router network, and play a multiplayer game together! These are called LAN Parties.

Companies with highly sensitive information (think financial systems or military systems) will not allow certain devices to be connected to the internet. These devices are connected to routers that are connected to other routers, forming a network of computers. This is called an **intranet**

# Terms

Before moving on, make sure you understand the following terms and concepts!

In this lesson we covered the following terms
* IP address: External IP Address, Local IP Address
* Static IP Address
* ISP
* Modem, Router
* Internet, Intranet
* LAN

We also covered the following concepts:
* The request / response journey from your device to youtube (request), then back to your device (response)

## Receiving Your Request on Device

The browser sends a request that goes to the router and then to the modem. 
The most important part of the URL is called the **hostname**, which tells the modem where to send the request to.
In the url, the hostname is *{% $myIp %}*. 
This is the external ip address given to me when I signed up for internet service with my ISP.

Your External Ip is: *{% $reqIp %}* and let's assume your local IP is *{% $exampleLocalIp %}*.

{% mermaid %}
graph LR
A[1. Your Browser, localIP {% $exampleLocalIp %}] --> B[2. Router]
B --> C[3. Modem IP {% $reqIp %}]
C --> |Sends a Request| D[The Internet]
D --> |request| E(3. My Modem IP {% $myIp %})
E --> F[4. Router]
{% /mermaid %}

1. When you typed *{% $ipUrl %}* into the browser, a request is sent, first to the router.
2. The router will take note of your local IP *{% $exampleLocalIp %}* and the url you are sending the request to (*{% $ipUrl %}*). This way, when you receive a response back, the router will know to send the response to your device instead of another device.
3. The request goes out the modem, into the internet, and eventually ends up in my home and into my modem because of the hostname (*{% $myIp %}*)
4. Since my modem is connected to my router, the request goes into my router

Normally, your request would die there because the router does not know which one of my device it should send the request to.

To make sure my computer receives incoming request from the router, I went to the router's admin page and configured **port forwarding**. The router will look at the **port number** specified in the url, *{% $externalPort %}*.

![port forwarding admin](https://v3.amayz.dev/uploads/port-forwarding.png)

This is telling the router that whenever the router receives a request on port *{% $externalPort %}*, forward the request to `192.168.0.21` on port 3035. `192.168.0.21` is a **static local ip address** I configured on my router for my computer.

{% mermaid %}
graph LR
D[The Internet] --> |request| E(My Modem IP {% $myIp %})
E -->F[4. Router]
F -->G[5. My Computer]
{% /mermaid %}

Because of port forwarding, the router will look at the request port number (*{% $externalPort %}*) and forwards the request to `192.168.0.21:3035`

## Receiving Your Request on Application

My computer is going to be receiving requests on port `3035` so I need to create an application that listens to requests on port `3035` and sends back a response. 

You can build 


