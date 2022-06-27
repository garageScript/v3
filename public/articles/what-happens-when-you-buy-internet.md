# Welcome

Welcome! This curriculum will try to do 2 things:

1. Help you understand the technology you are using 
2. Teach you the things you need to know to become a software engineer.

This course is designed to teach a beginner with no technical background the concepts and skills to be a software engineer. 
Therefore, if you feel any parts are confusing or difficult, please let us know and we will try to make it easier to understand.

# Getting internet

Since you are here, obviously you have internet. 
Let's first imagine you didn't have internet access and you need to set it up. What do you need to do?

## Finding an ISP
First, you need to find a internet service provider (ISP) that provides service in your area. What does it mean when a company provides service in your area?

When you use the internet, all the data is largely sent through cables and wires. 
In fact, our internet world is connected by [a few hundred cables laid on the ocean floor](what-happens-when-you-buy-internet). 
When a company says they provide service in your area, it means that they have a way to connect your home to these cables. 
They may use an existing cable in your home or come to your house to install a new cable.
Sometimes, instead of cables, they may need to install an antenna on your roof to give you internet wirelessly (Not very common)

## Plan
Once you have decided on an ISP, you need to decide on a plan that works for you! Internet plan has 2 important numbers: Upload and Download speeds. 

When you visit a website (like [youtube](https://www.youtube.com/)), this is generally what happens:

[![](https://mermaid.ink/img/pako:eNpNzrsKwkAQBdBfGaZSSAQttxAStLNKKnEtxuyoQXc37gORJP_u-gKnusW53OmxsYpR4MlRd4ZNJQ2kK3ZbGx2Uzt49uz3k-XKYz6BmozwQVHyL7MMA5SS5EA88_fTKt1z8S99Z43mAAjPU7DS1Ks31Ly8xnFmzRJGiIneRKM2YXOwUBV6rNliH4khXzxlSDLZ-mAZFcJF_aNVSel1_1fgEEoVEaA)](https://mermaid.live/edit#pako:eNpNzrsKwkAQBdBfGaZSSAQttxAStLNKKnEtxuyoQXc37gORJP_u-gKnusW53OmxsYpR4MlRd4ZNJQ2kK3ZbGx2Uzt49uz3k-XKYz6BmozwQVHyL7MMA5SS5EA88_fTKt1z8S99Z43mAAjPU7DS1Ks31Ly8xnFmzRJGiIneRKM2YXOwUBV6rNliH4khXzxlSDLZ-mAZFcJF_aNVSel1_1fgEEoVEaA)

Your browser sends a request to the website you are going to and the website sends you back a response.
The outgoing request is the upload and the incoming response is the download.
   * Upload Speed: Most users will not need high upload speed but if you are a youtube content creator and constantly uploading a video to youtube, you will need to consider picking a plan with higher upload speeds.
   * Download Speed: If you watch alot of movies or download alot of files, you obviously need a higher download speeds.

Most ISPs present upload and download speeds in terms of **bits**, but your computer displays file sizes in **bytes**. There are 8 bits in 1 byte. 

So, 8 megabits/s (aka 8mbps) is actually 1 megaBytes/s (1 mBps)

> What do you call 8 hobbits?   
A Hobbyte

Let's say you picked a plan that provides 80mbps. How long will it take to download a 50 megabyte file?   
80 mbps is 10 megabytes per second, so it will take 5 seconds to download a 50 megabyte file.

If you are sharing the internet with 5 roommates and every day at 8pm all of you watch your favorite shows on your own computer.  When you watch a video in 1080p, you use [5 megabits / second](https://help.netflix.com/en/node/306). What is the minimum download speed you need to make sure everyone is happy?

## Modem
Once you have picked your ISP, picked a plan (download / upload speeds), your home now needs to be physically connected to the internet via a cable (or antenna) before you will be able to use the internet. 
If a cable aready exist, it can be reused. Otherwise, your ISP will send a technician to install a cable for you. Every request and response to and from the internet will go through this cable. 

![cable](https://v3.amayz.dev/public/photos/uploads/comcast-coaxial-cable.png)

To connect your computer to the internet, you need a modem [like this one](https://www.bestbuy.com/site/arris-surfboard-32-x-8-docsis-3-0-cable-modem-white/). When buying a modem, make sure they can process the data faster than your internet speed! If your internet is 5 gigabits per second (gbps) but your modem is only 1 gigabit per second, then you will never see your internet speed go higher than 1 gigabit per second even though you are paying for 5 gbps plan.

![modem back](https://v3.amayz.dev/public/photos/uploads/modem-outlet.png)

Once you've plugged in a your modem to the power outlet, your internet cable to the modem, and your computer to the modem (via ethernet cable), your computer is now connected to the internet! All data will flow through the cable, processed by your modem, and sent to the ethernet cable (which your computer is connected to). You can now use the internet!

[![](https://mermaid.ink/img/pako:eNpNz00LwjAMBuC_EnJScIIedxDc9KYXdxLrIa7RFW07-yGI-t_tdII5hfC8IXlgbSVjjidHbQOrjTCQar7b2uigtLqNgd0esmwGxWCdrB5-SdHNnpMxVGykB4INXyP7ADdFUNPhwk8oB2lNiAfuM-UnM_3P-NYan2iBI9TsNCmZrnl0XmBoWLPAPLWS3FmgMK_kYisp8FKqYB3mR7p4HiHFYKu7qTEPLvIPLRSlz3SvXm_pl002)](https://mermaid.live/edit#pako:eNpNz00LwjAMBuC_EnJScIIedxDc9KYXdxLrIa7RFW07-yGI-t_tdII5hfC8IXlgbSVjjidHbQOrjTCQar7b2uigtLqNgd0esmwGxWCdrB5-SdHNnpMxVGykB4INXyP7ADdFUNPhwk8oB2lNiAfuM-UnM_3P-NYan2iBI9TsNCmZrnl0XmBoWLPAPLWS3FmgMK_kYisp8FKqYB3mR7p4HiHFYKu7qTEPLvIPLRSlz3SvXm_pl002)

Let's look at the above diagram from youtube's perspective.
You are youtube, you are receiving millions of requests per second.
How do you know who to send the response back to?

The answer is **public ip address** (also known as **external ip address**). 
When you finish signing up for internet service from your ISP, they will assign you an **external ip address**.
All request and responses with your ip address will be sent to your cable, which ends up in your modem and to your computer.
Your external IP address is: <external>


Now when you go to a website like [youtube.com](https://www.youtube.com/), this is what happens:

Once you have picked your ISP, picked a plan, and have a cable that physically connects you to the internet, your ISP will assign you an **external IP address**. This ipaddress identifies your cable and all requests to your ip address will end up on this cable. (This will be discussed in detail later, all you need to know at this point is that your ip address is tied to this cable that connects your home to the internet)





## Router
There is a problem. By connecting your computer to the modem directly, your computer is the ONLY device that can use your internet! What about your phone, tablets, other computers and other devices? This is why nobody connects their computer directly to their modem. Instead, most people will buy a router [like this one](https://www.amazon.com/NETGEAR-4-Stream-WiFi-Router-R6700AX/dp/B08KTXG8Q5/) and connect their modem's ethernet to the router

![router back](https://v3.amayz.dev/public/photos/uploads/router-back.png)

With a router connected, data will now flow from the cable into the modem then to the router. As you can see in the image above, you can connect up to 4 computers via ethernet cables and even more computers via wifi! 

To setup your wifi name and password as well as other router configurations, first you need to connect your computer to the router. Once your computer is connected to the router, you can access your router's configuration page by opening your browser and typing this url: `192.168.0.1` (This url may be different depending on your router. Your router's manual will tell you which url to type in as well as the username/password). Once there, you can setup your wifi's network name and password

![router admin wifi](https://v3.amayz.dev/public/photos/uploads/router-admin-wifi.png)

The reason why most wifi routers support 2 frequencies, 2.4Ghz and 5Ghz, is because when you have too many devices on wifi on the same frequency, they interfere with each other, leading to conjested / slow network.

At this point, your should be able to connect multiple devices to your router (via ethernet or wifi) and use the internet!

## Local IP Address



