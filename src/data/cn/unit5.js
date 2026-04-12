const unit5 = {
  id: "unit-5",
  title: "Unit V – Application Layer",

  topics: [

    // 🔹 DNS
{
  id: "dns",
  title: "Domain Name System (DNS)",

  sections: [

    {
      type: "text",
      value:
        "Domain Name System (DNS) is a distributed system that translates human-readable domain names into IP addresses required for communication in a network."
    },

    {
      type: "text",
      value:
        "It acts as a directory service that helps users access websites using easy-to-remember names instead of numerical IP addresses."
    },

    {
      type: "example",
      value:
        "Example: google.com → 142.250.x.x"
    },

    {
      type: "highlight",
      value:
        "DNS converts domain names into IP addresses"
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: DNS = Name → Number"
    },

    {
      type: "keywords",
      items: [
        "DNS",
        "Domain Name",
        "IP Address",
        "Name Resolution",
        "Distributed System"
      ]
    }

  ]
},

// 🔹 DNS LOOKUP
{
  id: "dns-lookup",
  title: "DNS Lookup Process",

  sections: [

    {
      type: "text",
      value:
        "DNS Lookup Process is the step-by-step procedure used to convert a domain name into its corresponding IP address."
    },

    {
      type: "heading",
      value: "Steps"
    },

    {
      type: "list",
      items: [
        "User enters domain name",
        "DNS resolver checks local cache",
        "Query sent to Root DNS server",
        "Root directs to TLD server",
        "TLD directs to Authoritative server",
        "Authoritative server returns IP address"
      ]
    },

    {
      type: "text",
      value:
        "The resolver first checks cache to reduce delay. If not found, it queries root, then TLD, and finally the authoritative server to obtain the IP address."
    },

    {
      type: "example",
      value:
        "Example: When you type google.com, DNS servers resolve it step-by-step to get its IP address."
    },

    {
      type: "highlight",
      value:
        "Step-by-step resolution from domain name to IP address"
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: User → Resolver → Root → TLD → Authoritative → IP"
    },

    {
      type: "keywords",
      items: [
        "DNS Resolver",
        "Root Server",
        "TLD",
        "Authoritative Server",
        "Lookup",
        "IP Address"
      ]
    }

  ]
},
// 🔹 DNS STRUCTURE
{
  id: "dns-structure",
  title: "DNS Name Space & Hierarchy",

  sections: [

    {
      type: "text",
      value:
        "DNS Name Space is a hierarchical structure that organizes domain names in a tree-like format for efficient resolution."
    },

    {
      type: "heading",
      value: "Hierarchy Levels"
    },

    {
      type: "list",
      items: [
        "Root Level",
        "Top-Level Domain (.com, .org)",
        "Second-Level Domain (google)",
        "Subdomain (mail.google.com)"
      ]
    },

    {
      type: "text",
      value:
        "Root is the top of the hierarchy.\n\nTLD includes domains like .com, .org.\n\nSecond-level represents organization names.\n\nSubdomains represent specific services or sections."
    },

    {
      type: "example",
      value:
        "Example: mail.google.com → 'com' (TLD), 'google' (second-level), 'mail' (subdomain)"
    },

    {
      type: "highlight",
      value:
        "DNS follows a hierarchical tree structure"
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: Root → TLD → Domain → Subdomain"
    },

    {
      type: "keywords",
      items: [
        "Hierarchy",
        "Root",
        "TLD",
        "Domain",
        "Subdomain",
        "Tree Structure"
      ]
    }

  ]
},

// 🔹 NAME RESOLUTION
{
  id: "name-resolution",
  title: "Name Resolution",

  sections: [

    {
      type: "text",
      value:
        "Name Resolution is the process of converting a domain name into its corresponding IP address using DNS."
    },

    {
      type: "heading",
      value: "Types"
    },

    {
      type: "list",
      items: [
        "Recursive Resolution",
        "Iterative Resolution"
      ]
    },

    {
      type: "text",
      value:
        "Recursive Resolution: DNS server resolves the query completely on behalf of the client.\n\nIterative Resolution: DNS server returns the best possible answer or referral to the next server."
    },

    {
      type: "example",
      value:
        "Example: Browser requests DNS resolver, which performs recursive resolution to find the IP."
    },

    {
      type: "highlight",
      value:
        "Recursive = Full answer | Iterative = Partial answer"
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: Recursive = Do all work | Iterative = Ask step-by-step"
    },

    {
      type: "keywords",
      items: [
        "Name Resolution",
        "Recursive",
        "Iterative",
        "DNS Query",
        "IP Address"
      ]
    }

  ]
},
// 🔹 EMAIL
{
  id: "email",
  title: "Electronic Mail",

  sections: [

    {
      type: "text",
      value:
        "Electronic Mail (Email) is an application layer service used to send and receive messages over the internet between users."
    },

    {
      type: "text",
      value:
        "It allows communication through text, attachments, and multimedia content."
    },

    {
      type: "example",
      value:
        "Example: Sending a message using Gmail or Outlook."
    },

    {
      type: "highlight",
      value:
        "Uses SMTP (sending), POP3/IMAP (receiving)"
    },

    {
      type: "tip",
      value:
        "👉 SMTP = Send | POP3/IMAP = Receive"
    },

    {
      type: "keywords",
      items: [
        "Email",
        "SMTP",
        "POP3",
        "IMAP",
        "Message",
        "Internet"
      ]
    }

  ]
},

// 🔹 EMAIL ARCHITECTURE
{
  id: "email-architecture",
  title: "Email Architecture",

  sections: [

    {
      type: "text",
      value:
        "Email Architecture defines how email systems are structured to send, transfer, and receive messages across networks."
    },

    {
      type: "heading",
      value: "Components"
    },

    {
      type: "list",
      items: [
        "User Agent (UA)",
        "Mail Transfer Agent (MTA)",
        "Mail Server"
      ]
    },

    {
      type: "text",
      value:
        "User Agent (UA): Interface used by users to compose and read emails.\n\nMail Transfer Agent (MTA): Transfers email between servers.\n\nMail Server: Stores and manages emails."
    },

    {
      type: "example",
      value:
        "Example: Gmail acts as a User Agent, while SMTP servers act as MTA."
    },

    {
      type: "highlight",
      value:
        "Email system works using client-server architecture"
    },

    {
      type: "tip",
      value:
        "👉 UA = User | MTA = Transfer | Server = Storage"
    },

    {
      type: "keywords",
      items: [
        "User Agent",
        "MTA",
        "Mail Server",
        "SMTP",
        "Architecture"
      ]
    }

  ]
},

// 🔹 EMAIL SERVICES
{
  id: "email-services",
  title: "Email Services",

  sections: [

    {
      type: "text",
      value:
        "Email Services provide functionalities for sending, receiving, storing, and retrieving email messages over the internet."
    },

    {
      type: "heading",
      value: "Services"
    },

    {
      type: "list",
      items: [
        "Sending mail (SMTP)",
        "Receiving mail (POP3, IMAP)",
        "Storage and retrieval"
      ]
    },

    {
      type: "text",
      value:
        "SMTP is used to send emails from client to server.\n\nPOP3 downloads emails to the local device.\n\nIMAP allows accessing emails directly from the server.\n\nMail servers store and manage emails."
    },

    {
      type: "example",
      value:
        "Example: Gmail uses SMTP to send emails and IMAP to access them from multiple devices."
    },

    {
      type: "highlight",
      value:
        "SMTP = Send | POP3/IMAP = Receive"
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: Send → SMTP | Receive → POP3/IMAP"
    },

    {
      type: "keywords",
      items: [
        "SMTP",
        "POP3",
        "IMAP",
        "Email Service",
        "Storage",
        "Retrieval"
      ]
    }

  ]
},

// 🔹 MESSAGE FORMAT
{
  id: "email-format",
  title: "Message Format",

  sections: [

    {
      type: "text",
      value:
        "Email Message Format defines the structure of an email, including header information and message content."
    },

    {
      type: "heading",
      value: "Components"
    },

    {
      type: "list",
      items: [
        "Header (To, From, Subject)",
        "Body (Message content)",
        "Attachments"
      ]
    },

    {
      type: "text",
      value:
        "Header contains sender, receiver, and subject details.\n\nBody contains the main message.\n\nAttachments include files like images, documents, etc."
    },

    {
      type: "example",
      value:
        "Example: An email includes To, From, Subject in header and message content in body."
    },

    {
      type: "highlight",
      value:
        "Email = Header + Body + Attachments"
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: Header = Info | Body = Message"
    },

    {
      type: "keywords",
      items: [
        "Header",
        "Body",
        "Attachments",
        "Email Structure",
        "Format"
      ]
    }

  ]
},
// 🔹 MESSAGE TRANSFER
{
  id: "email-transfer",
  title: "Message Transfer",

  sections: [

    {
      type: "text",
      value:
        "Message Transfer in email systems is the process of sending emails from sender to receiver using SMTP protocol."
    },

    {
      type: "heading",
      value: "Process"
    },

    {
      type: "list",
      items: [
        "Client → Mail Server (SMTP)",
        "Mail Server → Mail Server (SMTP)",
        "Receiver retrieves from Mailbox (POP3/IMAP)"
      ]
    },

    {
      type: "text",
      value:
        "The sender sends the email to the mail server using SMTP.\n\nThe mail server transfers it to the receiver’s mail server.\n\nThe receiver accesses the email using POP3 or IMAP."
    },

    {
      type: "example",
      value:
        "Example: Sending an email from Gmail to Yahoo involves multiple mail servers transferring the message."
    },

    {
      type: "highlight",
      value:
        "SMTP is used for sending, POP3/IMAP for receiving"
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: Send → SMTP → Server → Receive"
    },

    {
      type: "keywords",
      items: [
        "SMTP",
        "Mail Server",
        "Transfer",
        "POP3",
        "IMAP",
        "Mailbox"
      ]
    }

  ]
},

// 🔹 WWW
{
  id: "www",
  title: "World Wide Web (WWW)",

  sections: [

    {
      type: "text",
      value:
        "World Wide Web (WWW) is a system of interlinked web pages and resources accessed over the internet using web browsers."
    },

    {
      type: "text",
      value:
        "It allows users to access information, multimedia, and services through hyperlinks."
    },

    {
      type: "example",
      value:
        "Example: Websites like Google, YouTube, and Wikipedia are part of the WWW."
    },

    {
      type: "highlight",
      value:
        "Uses HTTP and HTTPS protocols"
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: WWW = Web pages + Browser + Internet"
    },

    {
      type: "keywords",
      items: [
        "WWW",
        "Web Pages",
        "Browser",
        "HTTP",
        "HTTPS",
        "Hyperlink"
      ]
    }

  ]
},
// 🔹 WEB ARCHITECTURE
{
  id: "web-architecture",
  title: "Web Architecture",

  sections: [

    {
      type: "text",
      value:
        "Web Architecture defines how web components interact using a client-server model to deliver web content over the internet."
    },

    {
      type: "heading",
      value: "Components"
    },

    {
      type: "list",
      items: [
        "Client (Browser)",
        "Server",
        "Request/Response Model"
      ]
    },

    {
      type: "text",
      value:
        "Client (browser) sends a request to the server.\n\nServer processes the request and sends a response.\n\nThis interaction follows the request-response model."
    },

    {
      type: "example",
      value:
        "Example: When you open a website, your browser requests data from the web server and displays the response."
    },

    {
      type: "highlight",
      value:
        "Follows Client-Server architecture"
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: Request → Process → Response"
    },

    {
      type: "keywords",
      items: [
        "Client",
        "Server",
        "Request",
        "Response",
        "Web Architecture"
      ]
    }

  ]
},

// 🔹 HTTP
{
  id: "http",
  title: "HTTP",

  sections: [

    {
      type: "text",
      value:
        "HyperText Transfer Protocol (HTTP) is a communication protocol used to transfer web pages and data between client and server."
    },

    {
      type: "heading",
      value: "Features"
    },

    {
      type: "list",
      items: [
        "Stateless protocol",
        "Request/Response model",
        "Runs on port 80"
      ]
    },

    {
      type: "text",
      value:
        "HTTP does not remember previous requests (stateless), so each request is handled independently."
    },

    {
      type: "example",
      value:
        "Example: When you click a link, HTTP sends a request and receives a response from the server."
    },

    {
      type: "highlight",
      value:
        "HTTP is not secure (data is not encrypted)"
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: HTTP = Fast but not secure"
    },

    {
      type: "keywords",
      items: [
        "HTTP",
        "Stateless",
        "Request",
        "Response",
        "Port 80",
        "Protocol"
      ]
    }

  ]
},

// 🔹 HTTPS
{
  id: "https",
  title: "HTTPS",

  sections: [

    {
      type: "text",
      value:
        "HTTPS (HyperText Transfer Protocol Secure) is a secure version of HTTP that uses encryption to protect data during communication between client and server."
    },

    {
      type: "heading",
      value: "Features"
    },

    {
      type: "list",
      items: [
        "Uses SSL/TLS encryption",
        "Secure data transmission",
        "Runs on port 443",
        "Provides authentication and data integrity"
      ]
    },

    {
      type: "text",
      value:
        "HTTPS encrypts data using SSL/TLS, ensuring that sensitive information like passwords and personal data cannot be intercepted by attackers."
    },

    {
      type: "example",
      value:
        "Example: Online banking and e-commerce websites use HTTPS to secure transactions."
    },

    {
      type: "highlight",
      value:
        "HTTPS = Secure and encrypted communication"
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: HTTP = Not secure | HTTPS = Secure 🔒"
    },

    {
      type: "keywords",
      items: [
        "HTTPS",
        "SSL",
        "TLS",
        "Encryption",
        "Security",
        "Port 443"
      ]
    }

  ]
}
  ]
};

export default unit5;