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

When you go to a website like [youtube.com](https://www.youtube.com/), this is what happens:

[![](https://mermaid.ink/img/pako:eNpNz00LwjAMBuC_EnJScIIedxDc9KYXdxLrIa7RFW07-yGI-t_tdII5hfC8IXlgbSVjjidHbQOrjTCQar7b2uigtLqNgd0esmwGxWCdrB5-SdHNnpMxVGykB4INXyP7ADdFUNPhwk8oB2lNiAfuM-UnM_3P-NYan2iBI9TsNCmZrnl0XmBoWLPAPLWS3FmgMK_kYisp8FKqYB3mR7p4HiHFYKu7qTEPLvIPLRSlz3SvXm_pl002)](https://mermaid.live/edit#pako:eNpNz00LwjAMBuC_EnJScIIedxDc9KYXdxLrIa7RFW07-yGI-t_tdII5hfC8IXlgbSVjjidHbQOrjTCQar7b2uigtLqNgd0esmwGxWCdrB5-SdHNnpMxVGykB4INXyP7ADdFUNPhwk8oB2lNiAfuM-UnM_3P-NYan2iBI9TsNCmZrnl0XmBoWLPAPLWS3FmgMK_kYisp8FKqYB3mR7p4HiHFYKu7qTEPLvIPLRSlz3SvXm_pl002)

Let's look at the above diagram from youtube's perspective.
You are youtube, you are receiving millions of requests per second.
How do you know who to send the response back to?

The answer is **public ip address** (also known as **external ip address**). 
When you sign up for internet service with your ISP, they will assign you an **external ip address**.
All request and responses with your ip address will be sent to your cable, which ends up in your modem and to your computer.
Your external IP address is: `<%= reqIp %>`

So you go to a website like [youtube.com](https://www.youtube.com/)

[![](https://mermaid.ink/img/pako:eNpFj8FKA0EMhl8l5FShFepxDoK79lBQkPYkjoe4E93Bzswyk6GVtu9utl0xp_DzfT_JEbvkGA1-ZRp6eNrYCDoPb6-pZmhTGKpwfofF4h6a2bOy4eaKNGN2Wt7ClqMrQLD30kNRrWMDF311UDfSDtYvJ2hnmkn94MlvL_7dv7_hMqRY-FrkuIiPJD7FqW0saXCOgXMg7_Tm49hkUXoObNHo6ih_W7TxrFwdHAmvnJeU0XzSrvAcqUra_sQOjeTKf9CjJ_0_TNT5F8JmWsg)](https://mermaid.live/edit#pako:eNpFj8FKA0EMhl8l5FShFepxDoK79lBQkPYkjoe4E93Bzswyk6GVtu9utl0xp_DzfT_JEbvkGA1-ZRp6eNrYCDoPb6-pZmhTGKpwfofF4h6a2bOy4eaKNGN2Wt7ClqMrQLD30kNRrWMDF311UDfSDtYvJ2hnmkn94MlvL_7dv7_hMqRY-FrkuIiPJD7FqW0saXCOgXMg7_Tm49hkUXoObNHo6ih_W7TxrFwdHAmvnJeU0XzSrvAcqUra_sQOjeTKf9CjJ_0_TNT5F8JmWsg)

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
