How a browser fetch the desired result of the URL?

This Readme has a information about the Browser.It includes How browser works?,Functionality and Both(High and Low) level of components of browser,Use of Rendering Engine and many more.

First, the browser combines the DOM and CSSOM into a "render tree," which captures all the visible DOM content on the page and all the CSSOM style information for each node.



## Process

Example of URL: https://www.github.com/pesto-students/p3-sachin-Dharmik3107

In this URL there are four parts:

### 1.Scheme
 The term written as https is the scheme, HTTPS stands for Hyper Text Transfer Protocol.ure. This scheme tells the browser to make a connection to the server using Transport Layer Security, or TLS. TLS is an encryption protocol to secure communications over the Internet. With HTTPS, the data exchanged between your browser and the server is encryption and end to end.

### 2.Domain

The term www.github.com is the Domain. Websites are collections of HTML,CSS,Javascripts and Image files which stored on strong computer which is called Server. Server contains domain of their particular website. When we enter the URL in browser, it search for domain name rather than IP because it is memorable adress than IP address of the server

### 3.Path

The term pesto-students in the URL is the Path to find to requested resource. When you find any URL which extension like .html then it is representing static file stored in server but if there is no any file with extension and it is server generated content using those files.

### Step 1: Browser will find the IP Address for the domain

After entering the URL Browser, browser needs to figure out server on the Internet to get connection with it.To find the Server, browser will look up for IP Address of Server using the domain we have entered in URL by checking on different cache layers.

A cache is a high-speed data storage layer which stores a subset of data, typically transient in nature, so that future requests for that data are served up faster than is possible by accessing the data's primary storage location.

Browser will check its own cache, opearing system cache, local network cache at router, DNS server cache at your Internet Service provider.

This all process of finding an IP Address is done by DNS Lookup and it will ask for more domains until it find the matching one.

### Step 2: Browser establish TCP Connection with the Server

After browser get the right domain and Server, it will initiate the connection process and packets from a client browser request get routed through the router, the ISP, through an internet exchange to switch ISPs and This all done using Transfer Control Protocol known As TCP.

### Step 3: Browser send request for HTTP to Server

After gettin connection with server, browser will communicate with server using rules of communication which is known as HTTP.It starts with the browser sending an HTTP request to the server to request the contents of the page. The HTTP request contains a request line, headers, and a body.

Request line contains a request method like GET, POST, PUT, PATCH , DELETE, and Path containing resource with version of HTTP.

### Step 4: Server process the Request and Sends back the response

As discussed in last step, Browser send request line containing Method, header and body and Based on that server process the information in it and Sends back the response to the Browser.

Response contains Status line with Status of request, headers to tell the browser about handling the response, and resource files like HTML,CSS,Javascripts and Images.

### Step 5: Browser Render the Content

After receiving the response from Server, browser will inspect the response header containing rendering information and using that it will render all the data and images on the user's screen.


## Screenshots

#### 1. Journey of Browser to Server

![Screenshot 2022-06-17 130030](https://user-images.githubusercontent.com/49364985/174253684-1dde2773-e8c4-423f-b00f-8122fad34dbb.jpg)

#### 2. Graphical Presentation of Process

![Screenshot 2022-06-17 130042](https://user-images.githubusercontent.com/49364985/174254237-47f512a9-2178-4fcb-a694-3984098c230a.jpg)

## Main Functionality of Browser:

The main function is to retrieve information from the World Wide Web and making it available for users
Visiting any website can be done using a web browser. When a URL is entered in a browser, the web server takes us to that website.

### High Level component of browser:

#### 1.The User Interface

It includes navigation menu, main content, address bar, buttons etc.

#### 2.Browser Engine: 

It is responsible for actions between the UI and the rendering engine

#### 3.Rendering Enginer:

It is responsible for displaying requested content

#### 4.Networking:

It is responsible for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.

#### 5.UI Backend:

It is used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific.

#### 6.JavaScript interpreter:

It is Used to parse and execute JavaScript code.

#### 7.Data storage:

This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies.

### Parsers in Browser:

#### 1.HTML Parsing:

When browser starts rendering, first of all it convert HTML code into DOM Tree.

This process contains two main activities:

1.HTML Tokenization: Transforming input text characters into HTML “tokens”.

2.DOM Tree Building: Transforming HTML tokens from the previous step into a DOM tree.

![Screenshot 2022-06-17 130042](https://zerox-dg.github.io/blog/2020/10/24/Browser-from-Scratch-HTML-parsing/html-parsing-process.png)

#### 2.CSS Parsing:

The CSS Parser is implemented as a package of Java classes, that inputs Cascading Style Sheets source text and outputs a Document Object Model Level 2 Style tree. Alternatively, applications can use SAC

Link for CSS parser: http://cssparser.sourceforge.net/

### Script Processor

The script processor uses the script cache to avoid recompiling the script for each incoming document. To improve performance, ensure the script cache is properly sized before using a script processor in production.The Script processor allows you to specify your own processor logic for a simple processor using JavaScript or Groovy. The script is entered as an option on the script processor.

### Types of Script
#### Client-Side Scripts :
Client-side scripting is responsible for interaction within a web page. The client-side scripts are firstly downloaded at the client-end and then interpreted and executed by the browser (default browser of the system).The client-side scripting is browser-dependent. i.e., the client-side browser must be scripting enables in order to run scripts.Client-side scripting is used when the client-side interaction is used. Some example uses of client-side scripting may be :
To get the data from user’s screen or browser.For playing online games.Customizing the display of page in browser without reloading or reopening the page.Here are some popular client-side scripting languages VBScript, JavaScript, Hypertext Processor(PHP).

#### Server-Side Scripts :
Server-side scripting is responsible for the completion or carrying out a task at the server-end and then sending the result to the client-end.In server-side script, it doesn’t matter which browser is being used at client-end, because the server does all the work.Server-side scripting is mainly used when the information is sent to a server and to be processed at the server-end. Some sample uses of server-scripting can be :Password Protection.Browser Customization (sending information as per the requirements of client-end browser)Form ProcessingBuilding/Creating and displaying pages created from a database.Dynamically editing changing or adding content to a web-page.Here are some popular server-side scripting languages PHP, Perl, ASP (Active Server Pages), JSP ( Java Server Pages).

### Tree Construction, Layout and Painting

#### Render Tree Construction, Layout and Painting

The CSSOM and DOM trees are combined into a render tree, which is then used to compute the layout of each visible element and serves as an input to the paint process that renders the pixels to screen. Optimizing each of these steps is critical to achieving optimal rendering performance.

![Screenshot](https://web-dev.imgix.net/image/C47gYyWYVMMhDmtYSLOWazuyePF2/b6Z2Gu6UD1x1imOu1tJV.png?auto=format&w=845)

#### To Construct Render tree, Browser follows steps as below:

1.Starting at the root of the DOM tree, traverse each visible node.

Some nodes are not visible (for example, script tags, meta tags, and so on), and are omitted since they are not reflected in the rendered output.

Some nodes are hidden via CSS and are also omitted from the render tree; for example, the span node---in the example above---is missing from the render tree because we have an explicit rule that sets the "display: none" property on it.

2.For each visible node, find the appropriate matching CSSOM rules and apply them.

3.Emit visible nodes with content and their computed styles.



#### Layout

Layout is the Step of process of Rendering in browser. In this step, browser uses tree made from HTML and CSS to make a layout of different tags like <nav>,<div>,<section> and many more.It will organize all the tags one by one and step by step by checking their display style, width, height, position type etc. At the end of this process we will have a black and white layout without any graphical visibility.

#### Painting

Painting is also the step of Rendering Process and it comes after Layout. It is responsible for all graphical and colorfull resolution of Layout on the page like <div> has background-color property set to be magenta and in this step it will paint the div section by Magenta color.It includes all color styling and visual properties like shadows and their color, font sizes, font color, background color and many more.

### Order of Script Processing
Sample code:

    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <script src="first.js"></script>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <img src="abc.jpg" alt="">
        </body>
    </html>

Order for this code:


    The HTML document gets downloaded

    The parsing of the HTML document starts

    HTML Parsing reaches <script src="first.js">

    first.js is downloaded and parsed

    HTML parsing reaches <link href="style.css">

    abc.css is downloaded and parsed

    HTML Parsing reaches <img src="abc.jpg">

    abc.jpg is downloaded and displayed

    Parsing of HTML document ends

As we can see it will follows line by line to download and parse every external js file, css file and image file and internal script and style also.
