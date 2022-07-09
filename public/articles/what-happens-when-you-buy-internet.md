# Welcome

Dear student,

My goal in writing this curriculum is:

1. Help you understand the technology you are using 
2. Teach you the things you need to know to become a software engineer.

This curriculum is designed to teach a beginner with no technical background. 
From my previous teaching experience, I have learned that jumping straight into coding can be very difficult.
Therefore, this curriculum will start by helping you understand the internet you use and introduce code to you along the way.
Hopefully this will help you appreciate the engineering effort that goes into building the websites you use every day.

These early chapters are extremely important because it is the foundation of how the internet works.
I will start by helping you understand the steps you may have taken to get internet service 
(most people blindly follow directions to setup their modems and routers without understanding what they are doing).

Then I will explain what happens when you visit this site ({% $hostname %}).
I will revisit this over and over again, each time going a little deeper. 
In fact, the entirety of this curriculum is to teach you what happens when you visit a website, which covers many areas of engineering: front-end, back-end, fullstack, database, and infrastructure.

If you don't understand something, there is a good chance many other students will struggle with the same question.
So you feel any parts are confusing or difficult, please let me know and I will try to make it easier to understand. 

With your help, I want to constantly improve this curriculum and make it better for the next student.

Amay

# Getting internet

Since you are here, obviously you have internet. Let's first make sure you and I are on the same page on what internet means.

To me, being connected to the internet means that my computer can talk to any other device also connected to the internet. 

But how?

Just like how you can send me mail (letter or a package) if you know my address, your computer can send me a request to my computer if you know my internet address (aka **ip address**).

Let's say you live in Bangladesh and you want to send me (San Francisco) a mail package. It will take a few days because your package need to be prepared, put on a plane, and then delivered by a truck to your door.

![mail journey](https://v3.amayz.dev/public/photos/uploads/sf-bangladesh.png)

In contrast, our internet world is connected by [a few hundred cables laid on the ocean floor](what-happens-when-you-buy-internet). 
When your computer sends a request to my computer, the information goes through the cables and eventually end up in my computer.

When you went to this site {% $hostname %}, your computer sent a request to my computer. 
My computer sent you a response, which you are reading now. 

**{% $roundTripTime %} seconds** {% .center %}

The whole trip, your computer sending the request to my computer, my computer processing your request, and my computer sending a response back to you, took **{% $roundTripTime %} seconds** 

{% mermaid %}
graph LR
A[Your Computer] -->|1. Sends a Request| B({% $hostname %} - My Computer)
B -->|2. Sends a Response| A
{% /mermaid %} 

In the example above, your computer sent a request to my computer when you visited {% $hostname %}. 
All websites work similarly. When you visit `google.com`, your computer is sending a request to a computer owned by Google.

With this understanding of the internet, let's start by imagining that you do not have internet access and you need to set it up.
What do you need to do? 

## Finding an ISP
First, you need to find a internet service provider (ISP) that provides service in your area. What does it mean when a company provides service in your area?

As mentioned above, the internet world is connected by cables. 
When a company says they provide service in your area, it means that they have a way to connect your home to these cables. 
They may use an existing cable in your home or come to your house to install a new cable.

Sometimes, instead of cables, they may need to install an antenna so they can beam internet information to you wirelessly (An example of this is Starlink, but this is not required knowledge for most engineering positions so we will ignore this)

## Upload and Download Speeds
Once you have decided on an ISP, you need to decide on a plan that works for you! 
Internet plan has 2 important numbers: Upload and Download speeds. 

{% mermaid %}
graph LR
A[Your Computer] -->|1. Sends a Request| B({% $hostname %} - My Computer)
B -->|2. Sends a Response| A
{% /mermaid %} 

In the example above
* **Upload Speed** determines how quickly you send the request. If you are a youtube content creator and constantly uploading videos your computer will send big requests and you may need to consider picking a plan with higher upload speeds.
* **Download Speed** determines how quickly you receive the response. If you watch alot of movies or download alot of files, your computer will receive big responses so you may consider picking a plan with higher download speeds.

Most ISPs present upload and download speeds in terms of **bits**, but your computer displays file sizes in **bytes**. There are 8 bits in 1 byte. 

So, 8 Megabits per second (aka 8Mbps) is actually 1 MegaByte per second (1 MBps)

> What do you call 8 hobbits?   
A Hobbyte

{% exercise exerciseId="ispSpeed" articleName=$articleName %}
{% /exercise %}

## Modem

{% sideBySide %}

Once you have picked your ISP, picked a plan (download / upload speeds), and paid your fees, 2 things will happen:
1. Your home now needs to be physically connected to the internet via a cable before you will be able to use the internet. 
If a cable aready exist, it can be reused. Otherwise, your ISP will send a technician to install a cable for you. Every request and response to and from the internet will go through this cable. 
2. You will be assigned a **public ip address**. Any request sent to this ip address will be sent to this cable in your home

---

![cable](https://v3.amayz.dev/public/photos/uploads/comcast-coaxial-cable.png)
{% /sideBySide %}


{% sideBySide %}
![modem back](https://v3.amayz.dev/public/photos/uploads/modem-outlet.png)

To connect your computer to this internet cable, you need a modem [like this one](https://www.amazon.com/ARRIS-SURFboard-SB6183-Docsis-Packaging/dp/B00MA5U1FW/ref=asc_df_B00MA5U1FW/). 

You connect your cable and computer (through the ethernet cable) into the modem and you will be able to access the internet. 

All requests to your ip address will flow through the cable, processed by your modem, and sent to your computer.
{% /sideBySide %}

When buying a modem, make sure they can process the data faster than your internet speed! If your internet is 5 gigabits per second but your modem is only 1 gigabit per second, you will never see your internet speed go higher than 1 gigabit per second even though you are paying for 5 gbps plan.

When you visited our website (**{% $hostname %}**), this is what happens:

{% mermaid %}
graph LR
A[Your Computer] --> B(Modem)
B -->|1. Sends a Request via cable| C({% $hostname %})
C -->|2. Sends a Response| B
{% /mermaid %}

Let's look at the above diagram from youtube's perspective.
You are youtube, you are receiving millions of requests per second.
How do you know who to send the response back to?

The answer is **public ip address** (also known as **external ip address**). 
When you sign up for internet service with your ISP, they will assign you an **external ip address**.
All request and responses with your ip address will be sent to your cable, which ends up in your modem and to your computer.
Your external IP address is: *{% $reqIp %}*

So you go to a website like [youtube.com](https://www.youtube.com/)

{% mermaid %}
graph LR
A[Your Computer] --> B(Modem)
B -->|1. Sends a Request with source: {% $reqIp %}| C(Youtube)
C -->|2. Sends a Response with destination: {% $reqIp %} | B
{% /mermaid %}

Your request will contain your external ip address. This way, when youtube receives a request, youtube will know to send back the response to the requestor's external ip address.

## Router
By connecting your computer to the modem directly, your computer is the ONLY device that can use your internet! What about your phone, tablets, other computers and other devices? For this reason, almost nobody would connect their computer directly to their modem. Instead, most people will buy a router [like this one](https://www.amazon.com/NETGEAR-4-Stream-WiFi-Router-R6700AX/dp/B08KTXG8Q5/) and connect their modem's ethernet to the router

![router back](https://v3.amayz.dev/public/photos/uploads/router-back.png)

With a router connected, data will now flow from the cable into the modem then to the router. As you can see in the image above, you can connect up to 4 computers via ethernet cables and even more computers via wifi! 

To setup your wifi name and password as well as other router configurations, first you need to connect your computer to the router. Once your computer is connected to the router, you can access your router's configuration page by opening your browser and typing this url: `192.168.0.1` (This url may be different depending on your router. Your router's manual will tell you which url to type in as well as the username/password). Once there, you can setup your wifi's network name and password

![router admin wifi](https://v3.amayz.dev/public/photos/uploads/router-admin-wifi.png)

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

# Next Step

Go to: `69.181.248.93:8035`

Put the above into the url bar like so

![ip url](https://v3.amayz.dev/public/photos/uploads/ip-url.png)

Depending on the operating system and browser you use, your browser may look different from the image above.
