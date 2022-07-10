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

**{% $roundTripTime %} seconds** {% .text-center %}

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

*FYI* Note that your specific internet setup may be different from the setup presented below, but the underlying concept is the same everywhere. Read through to the end and use the underlying knowledge to understand your own internet service.

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

{% toggle summary="What do you call 8 hobbits?" %}
A Hobbyte
{% /toggle %}

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

When buying a modem, make sure the modem can process the data faster than your internet speed! If your internet is 5 gigabits per second but your modem is only 1 gigabit per second, you will never see your internet speed go higher than 1 gigabit per second even though you are paying for 5 gbps plan.

Since you have internet access, you are connected to a modem somewhere.   
The public IP address associated with the modem is 

**{% $reqIp %}** {% .text-center %}

To continue, I invite you to send a request to my public ip address!

**{% $myIp %}:{% $externalPort %}** {% .text-center %}

Put the above into the url bar like so

![ip url](https://v3.amayz.dev/public/photos/uploads/ip-url.png)

Depending on the operating system and browser you use, your browser may look different from the image above.
