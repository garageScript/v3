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

# Writing Code

To be able to handle your incoming request, I had to write some code to tell the computer what to do. 
Any running code that tells the computer what to do is called an **application**. 
I will walk you through what I did by first writing the code then running the code (and my running code is called an **application**).

![folder image](http://69.181.248.93:8035/uploads/appfolder-zombie.png)
I first created a folder called *website* (I could have named the folder whatever I wanted) and created a file inside the folder called `zombie` using a text editor (I could have named the file whatever I wanted).
The most common editor used to write code currently is [vscode](https://code.visualstudio.com/)

# Editor
Why do I need a text editor? Why couldn't I simply use [microsoft word](https://www.microsoft.com/en-us/microsoft-365/word)?

![microsoft word](http://69.181.248.93:8035/uploads/helloThereWord.jpg)
The reason is that editors like Microsoft Word allows **rich text editing**, meaning you can add styles to your text by changing the font size, making it bold, setting margins, etc. 
So if you write `Hello there! How are you doing?` into Microsoft Word and save the file (`hello.docx`), Microsoft Word will write into `hello.docx` in a way that only Microsoft Word will understand, preserving all your text styles.

![microsoft word output](http://69.181.248.93:8035/uploads/helloThereTxt.jpg)
The content that gets saved into `hello.docx` file actually looks like the above; Gibberish that only Microsoft Word understands. 

Unlike rich text editors like Microsoft Word, a text editor like [vscode](https://code.visualstudio.com/) will contain exactly what you write.
If I wrote `Hello there! How are you doing?` using vscode and save, the file will contain exactly `Hello there! How are you doing?`.


{% exercise exerciseId="biggerFileSize" articleName=$articleName %}
{% /exercise %}

# CPU, Memory, and Hard Drive

Before using [vscode](https://code.visualstudio.com/), I had to install vscode into my computer.

What does it mean to install vscode? 
Installing vscode means that the computer is taking all the files needed to run vscode and storing it in my **hard drive**.

A **hard drive** stores files. All the applications in your computer (your browser, your music player, etc) are files on your hard drive. 
**Writing to drive** is the technical term for saying that the computer is saving a file to hard drive

{% sideBySide %}

![512 GB hd](http://69.181.248.93:8035/uploads/macbook-pro-hd.png)

My hard drive has `512GB` capacity. 

GB stands for **Gigabytes**.

1GB has `1,073,741,824 bytes`

If a file is `1GB`, my computer can at most 512 copies of that file

Generally, an SSD (a type of hard drive that my computer has) can write about 1.5GB per second

{% /sideBySide %}

{% exercise exerciseId="writeSpeed" articleName=$articleName %}
{% /exercise %}

After installing VScode on my computer, I open VScode! 

What happens when I open an application like VScode? (colloquially, we say opening an application. But technically, we are opening a file)

When I opened VSCode, my computer is getting all the necessary files from hard drive that is required to run VSCode and then putting them in **memory**.
The technical term for "getting all necessary files from hard drive" is **reading from drive**.

Generally, an SSD can be read at about 1.5GB per second (very similar to write speeds).

{% sideBySide %}

![16 GB memory](http://69.181.248.93:8035/uploads/macbook-pro-memory.png)

My computer's memory has `16GB` capacity. 

If an application file is `1GB`, my computer hold at most 16 applications at once.

If I open another application, the computer would need to remove an existing application from the memory before reading the new application into memory.

Generally speaking the more memory you have, the more applications you can have open at once without your computer slowing down

{% /sideBySide %}

Once the application has been loaded into memory, the computer can start reading and executing the application instructions. 

The memory read speed is about `200GB/s` (200 Gigabytes per second), about 130 times faster than the hard drive.

So when your computer runs out of memory, your computer will slow to a crawl because it has to read from hard drive which is 130 times slower!

The **CPU** is the brains of the computer. Whenever I say the computer can start reading and exectuting the application instructions, I actually meant the CPU can start reading and executing the application instructions.

{% sideBySide %}

![10 cores](http://69.181.248.93:8035/uploads/macbook-pro-cores.png)

My computer has 10 core CPU.

This means that my computer can have up to 10 applications running at the same time.

Each core can be loading files into memory and executing the application instructions, all at the same time.

{% /sideBySide %}

Each CPU core on my computer is a `3.2 Gigahertz (Ghz) processor`, meaning it can process 3.2 billion instructions every second.

The higher the frequency, (Ghz), the faster the CPU can execute instructions.

{% sideBySide %}

![vscode](http://69.181.248.93:8035/uploads/vscode.png)

After VSCode has been loaded into memory and the CPU finishes running the instructions,
the VSCode application shows up and now I can start writing my code!

{% /sideBySide %}

When VSCode has been loaded up and I start typing into my `zombie` file,
everything I type is stored in the memory. 
When you save the file, the contents of the file in memory is written into disk. 

{% sideBySide %}

![typing code](http://69.181.248.93:8035/uploads/typing-code.png)

The more I type, the more memory this file occupies

The more I delete, the less memory this file occupies

{% /sideBySide %}

A computer's memory is divided into 2 parts:

1. **Static Memory**: For holding things that do not change in size. For example, VSCode application takes up 1GB. When it is loaded into memory, it will take up only 1GB.
2. **Heap Memory** (also known as **Dynamic Memory**): For holding things that changes in size. When I open the file `zombie` with VSCode, the file content is loaded into **Heap Memory**. The more I type, the more memory is used.

My computer's memory capacity is 16GB, which means that Static Memory plus Heap Memory usage is always less than or equal to 16GB

# File Size

Each character in a file usually takes up 1 byte, sometimes 2 bytes.
For example, if I write the following into a file (ignore the line numbers, they are there to help you see that there are two lines)

```
Hello World
How are you?
```

the file would be a little more than 24 bytes. Don't forget that spaces and **new line** (between `World` and `How`) count as characters too!)

As a file gets large, we use abbreviations.
Instead of `50,000,000 bytes` we say the file is `50 megabytes`.
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

If I see a file size of `123,234,978 bytes`, I'm not going to divide by `1,048,576` to get size representation in Megabytes because it is too difficult. 
Instead, I will simply divide by `1,000,000` and say the file is `123 Megabytes(MB)`

Software engineers are expected to be able to quickly approximate file sizes. 

{% exercise exerciseId="approximateFileSizes" articleName=$articleName %}
{% /exercise %}

# Binary Numbers

When converting file sizes, why divide and multiply by such strange numbers like `1024`, `1,048,576`, etc?

Why not divide by `1000`, `1,000,000` instead to make it easier?

To understand why, you must first understand binary numbers.
Binary numbers mean that you can only use `0` and `1`.

In a computer, all information (including numbers) are stored as binary numbers in the computer. 
This is because the electronics that make up a computer are essentially billions of **transistors**, which are tiny switches that activations when electricity flows through it. 
Active state is `1` and inactive state is `0`.

{% toggle summary="Fun fact: In the past, cosmic rays from space can hit a computer and cause electricity to flow in the CPU or Memory (resulting in a 1 instead of a 0). This have caused some very unexpected issues." %}
[YouTube Video](https://www.youtube.com/watch?v=AaZ_RSt0KP8) explains this concept. This is no longer an issue because all electronics in the present will have a coating layer to protect it from cosmic rays.
{% /toggle %}

## Counting
In order to count in binary, you should first understand the algorithm behind counting.

{% slideShow %}

# slide

First we count using the digits `0-9`:

0, 1, 2, 3, 4, 5, 6, 7, 8, 9

These are all one-digit number.

# slide
 0,  1,  2,  3,  4,  5,  6,  7,  8,  9

Once we have used up all the digits in the one-digit number, we just continue to two-digit number.

Increment the first digit (if there is no first digit, imagine a `0` as the first digit) and start counting again

10, 11, 12, 13, 14, 15, 16, 17, 18, 19

Increment the first digit and start counting again

20, 21, 22, 23, 24, 25, 26, 27, 28, 29

Increment the first digit and start counting again

...

90, 91, 92, 93, 94, 95, 96, 97, 98, 99

# slide

90, 91, 92, 93, 94, 95, 96, 97, 98, 99

Once we have used up all the digits in the two-digit number, we just continue to three-digit number.

Increment the first digit (if there is no first digit, imagine a `0` as the first digit) and start counting again

100, 101, 102, ... , 198, 199

Increment the first digit and start counting again

200, 201, 202, ... , 298, 299

Increment the first digit and start counting again

...

900, 901, 902, ... , 998, 999

# slide

900, 901, 902, ... , 998, 999

Once we have used up all the digits in the three-digit number, we just continue to four-digit number.

Increment the first digit (if there is no first digit, imagine a `0` as the first digit) and start counting again

1000, 1001, 1002, ... , 1998, 1999

Increment the first digit and start counting again

2000, 2001, 2002, ... , 2998, 2999

Increment the first digit and start counting again

...

9000, 9001, 9002, ... 9998, 9999

# slide

9000, 9001, 9002, ... 9998, 9999

Once we have used up all the digits in the four-digit number, we just continue to five-digit number.

Increment the first digit (if there is no first digit, imagine a `0` as the first digit) and start counting again

10000, 10001, 10002, ..., 19998, 19999

Increment the first digit and start counting again

20000, 20001, 20002, ... , 29998, 29999

Increment the first digit and start counting again

...

90000, 90001, 90002, ... 99998, 99999

# slide

90000, 90001, 90002, ... 99998, 99999

Once we have used up all the digits in the five-digit number, we just continue to six-digit number.

Increment the first digit (if there is no first digit, imagine a `0` as the first digit) and start counting again

100000, 100001, 100002, ..., 199998, 199999

Increment the first digit and start counting again

200000, 200001, 200002, ... , 299998, 299999

Increment the first digit and start counting again

...

900000, 900001, 900002, ... 999998, 999999

... And so on ...{% .text-center %}
{% /slideShow %}

{% exercise exerciseId="binaryCount" articleName=$articleName %}
{% /exercise %}

A series of transistors can be used to represent a binary number.

For example, let's say you have 5 transistors and the first 4 are in an active state (meaning electricity is flowing through them), you have the binary number: `11110`

The number of transistors corresponds to the number of digits in the binary number system.

Here's a table showing the number of binary digits and how many numbers they can represent
{% table %}
* Number of digits
* Numbers that can be represented
* Explanation
---
* 1
* 2
* A transistor could be off or on (0, 1)
---
* 2
* 4
* 00, 01, 10, 11
---
* 3
* 8
* 000, 001, 010, 011, 100, 101, 110, 111
---
* 4
* 16
* 0000, 0001, ... 1111
---
* 5
* 32
* 00000, 00001, ... 11111
---
* 6
* 64
* 000000, 000001, ... 111111
---
* 7
* 128
* 0000000 - 1111111
---
* 8
* 256
* 00000000 - 11111111
---
* 9
* 512
* 000000000 - 111111111
---
* 10
* 1024
* 0000000000 - 1111111111
---
* ...
* ...
* ...
---
* 20
* 1,048,576
* ...
---
* ...
* ...
* ...
---
* 30
* 1,073,741,824
* ...
---
* ...
* ...
* ...
---
* 40
* 1,099,511,627,776 
* ...
---
* ...
* ...
* ...
---
* 50
* 1,125,899,906,842,624
* ...
{% /table %}

The general formula is 2 ^ number of digits gives you the amount of possible numbers that can be represented by that number of binary digits.

Your memory and hard drive capacity directly correlates to how many transistors they can contain.
This is why memory sizes and hard drive sizes always corresponds to number of binary digits: 2GB, 4GB, 8GB, 16GB, 32GB, 64GB, 128GB, 256GB, 512GB, etc.

Since your computer is made up of transistors, it is easier for computer to work with numbers that are exponents of 2. This is why when converting file sizes, the computer divides and multiplies by numbers like 1024, 1,048,576, etc.

{% toggle summary="Trivia: A king is throwing a big festival and has 1000 barrels of wine. An intruder poisoned exactly one of the barrel. Anyone who drinks from the poisoned barrel will die in 24 hours. The festival is in 44 hours and the King can sacrifice up to 10 prisoners. How does the king figure out which barrel of wine is poisoned?" %}

First line up the barrel and number them 0-1000.

Line up the 10 prisoners: ABCDEFGHIJ

For each of the barrel, the prisoners must drink from it according to the binary number of the barrel. 

For example, the 38th barrel (Binary `0000100110`), prisoner EHI will drink.

After 24 hours, the prisoners that died will reflect the binary number of the barrel that was poisoned.

For example, if prisoners DGHJ died, barrel `0001001101` (77) is poisoned
{% /toggle %}

# File name

Now that you understand your computer and what happens when you create a file, let's continue writing some code to tell the computer how to handle your incoming request.

![folder image](http://69.181.248.93:8035/uploads/appfolder-zombie.png)
To write code, I created a folder called `website` and created a file inside the folder called `zombie` using a text editor.

Using vscode, I open the file `zombie` and write some code.

```
const a = require("http");

const b = `
  <link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css">
  <article>
  <h1>What's just happened!?</h1>
  <p>What happened when you put a <strong>url</strong> (i.e <code>69.181.248.93:8035</code>) into the url bar and hit &quot;enter&quot;?</p>
  <h2>Receiving Your Request on Device</h2>
  ...
  </article>
`

const c = function (req, res) {
  res.send(b)
};

const d = http.createServer(c);

server.listen(8035)
```

As an seasoned software engineer, I feel uncomfortable when I look at the code above.
Every character looks the same and it makes the code very difficult to read.

This is because vscode does not know what kind of file `zombie` is. 

You should always put a **file extension** to a file to tell the application what type of file it is.
In this case, our code is **JavaScript** so we should rename the file to `zombie.js`.

Now when you open the file `zombie.js` with vscode, vscode will look at the file extension (`.js`) and determine that the file contains JavaScript code.
It will then display the code to you in a way that would make it easier for you to read.

```js
const a = require("http");

const b = `
  <link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css">
  <article>
  <h1>What's just happened!?</h1>
  <p>What happened when you put a <strong>url</strong> (i.e <code>69.181.248.93:8035</code>) into the url bar and hit &quot;enter&quot;?</p>
  <h2>Receiving Your Request on Device</h2>
  ...
  </article>
`

const c = function (req, res) {
  res.send(b)
};

const d = http.createServer(c);

server.listen(8035)
```

It is generally expected that you should always put a file extension when you work with files.
The generally expected way to do things is called **Best Practice**.

For the rest of this curriculum, I will start with the "wrong" way to do things, then fix it to follow best practice to help you understand the best practices we follow in the industry.

It is best practice to name your files according to its functionality.

Since our code has nothing to do with zombies, `zombie.js` is a terrible file name. 

Let's rename our code to `server.js`. 

You will understand why we named the file `server.js` after you understand the code.

# Application

The best way to understand the code above is to run the code and go through the code line by line like a computer.

[NodeJS](https://nodejs.org/en/) is an application that can run JavaScript code. 
After installing it, I run the code I wrote by typing `node server.js` into the terminal. 

When I execute `node server.js`, NodeJS will get the file `server.js` from the hard disk and load it into memory. 
Once the file is in memory, NodeJS will start reading and executing it line by line.

In each line, the computer reads from left to right


{% slideShow  %}

# slide
{% sideBySide %}

**Line 1**

`const a = `  
creates a **variable** called `a`. Variable stores information. Everything to the right of `=` is going to be stored into variable `a`

`require`  
`require` is a function that NodeJS understands. A **function** is a list of instructions. 

`require("http")`  
The parenthesis `()` immediately after the function tells NodeJS to **execute** the function.  
Everything inside the parenthesis is called an **argument**. 
Arguments are information passed into a function to help with its execution.

`"http"` is a string. A string is a bunch af characters with no meaning. This is passed into the `require` function as **an argument**.

The result of a function is called the **return value**. 
When `require` runs, it is looks for a 


---

```js
data-line|1;
const a = require("http");
const b = `
<article>

<h1>
What just happened!?
</h1>

<p>
What happened when 
you put a url

<code>
69.181.248.93:8035
</code>

into the url bar
and hit enter?

</p>

<h2>Receiving Request </h2>

...

</article>
`;

const c = function (q, s) {
  s.send(b)
};

const d = a.createServer(c);

server.listen(3035)
```

{% /sideBySide %}

{% /slideShow  %}




















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


