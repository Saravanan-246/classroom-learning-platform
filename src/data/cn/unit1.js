const unit1 = {
  id: "unit-1",
  title: "Unit I – Introduction to Networks",

  topics: [

    // 🔹 INTRODUCTION 
{
  id: "intro-network",
  title: "Introduction to Networks",

  sections: [
    { 
      type: "heading", 
      value: "What is a Computer Network?" 
    },

    {
      type: "text",
      value:
        "A computer network is a group of connected devices that communicate with each other and share resources like data, files, and internet."
    },

    {
      type: "highlight",
      value:
        "Network = Devices + Communication + Resource Sharing"
    },

    {
      type: "list",
      items: [
        "Connects multiple devices",
        "Allows communication between devices",
        "Enables sharing of data and resources",
        "Used in internet, offices, and colleges"
      ]
    },

    {
      type: "example",
      value:
        "Example: Internet, College Lab Network, Office WiFi"
    },

    {
      type: "tip",
      value:
        "👉 Shortcut: If devices can communicate + share data → it is a network"
    },

    {
      type: "highlight",
      value:
        "Exam Point: A network connects devices to communicate and share resources."
    }
  ]
},
// 🔹 USES
{
  id: "uses-of-network",
  title: "Uses of Networks",

  sections: [
    { 
      type: "heading", 
      value: "Why Networks are Important?" 
    },

    {
      type: "text",
      value:
        "Computer networks are used to connect people and devices for communication, sharing resources, and accessing services quickly and efficiently."
    },

    {
      type: "highlight",
      value:
        "Main Purpose: Communication + Resource Sharing + Service Access"
    },

    {
      type: "list",
      items: [
        "Communication → Email, Chat, Video Calls",
        "Resource Sharing → Printer, Files, Internet",
        "Online Services → Banking, Shopping, Education",
        "Entertainment → YouTube, Netflix, Games"
      ]
    },

    {
      type: "example",
      value:
        "Example: Sending files through WhatsApp, attending online classes, or watching YouTube"
    },

    {
      type: "tip",
      value:
        "👉 Shortcut: Networks help people communicate and share resources anywhere in the world"
    },

    {
      type: "highlight",
      value:
        "Exam Point: Networks are used for communication, resource sharing, online services, and entertainment."
    }
  ]
},
    // 🔹 TYPES
{
  id: "types-of-network",
  title: "Types of Networks",

  sections: [
    { 
      type: "heading", 
      value: "Types of Networks (Based on Size)" 
    },

    {
      type: "text",
      value:
        "Networks are classified based on the geographical area they cover. The main types are LAN, MAN, and WAN."
    },

    {
      type: "highlight",
      value:
        "Classification: LAN (Small) → MAN (Medium) → WAN (Large)"
    },

    {
      type: "list",
      items: [
        "LAN (Local Area Network) → Covers small area like home, school, or office",
        "MAN (Metropolitan Area Network) → Covers a city or large campus",
        "WAN (Wide Area Network) → Covers large area like country or world"
      ]
    },

    {
      type: "heading",
      value: "Key Differences"
    },

    {
      type: "list",
      items: [
        "LAN → High speed, low cost, small area",
        "MAN → Moderate speed, covers city",
        "WAN → Lower speed, high cost, global coverage"
      ]
    },

    {
      type: "example",
      value:
        "LAN → College Lab, MAN → City Network, WAN → Internet"
    },

    {
      type: "tip",
      value:
        "👉 Easy Trick: LAN = Local, MAN = Metropolitan (City), WAN = World"
    },

    {
      type: "highlight",
      value:
        "Exam Point: Networks are classified as LAN, MAN, and WAN based on their coverage area."
    }
  ]
},

    // 🔹 NETWORK TECHNOLOGY
{
  id: "network-technology",
  title: "Network Technology",

  sections: [
    {
      type: "heading",
      value: "What is Network Technology?"
    },

    {
      type: "text",
      value:
        "Network technology refers to the hardware and software used to connect devices and enable communication and data transfer between them."
    },

    {
      type: "highlight",
      value:
        "Network Technology = Hardware + Software + Communication"
    },

    {
      type: "heading",
      value: "Types of Network Technology"
    },

    {
      type: "list",
      items: [
        "Wired Network → Uses cables like Ethernet for communication",
        "Wireless Network → Uses signals like WiFi or Bluetooth",
      ]
    },

    {
      type: "heading",
      value: "Networking Devices"
    },

    {
      type: "list",
      items: [
        "Router → Connects different networks (Internet connection)",
        "Switch → Connects multiple devices within same network",
        "Hub → Simple device that sends data to all devices"
      ]
    },

    {
      type: "example",
      value:
        "Example: Home WiFi uses a router and wireless signals to connect mobile and laptop"
    },

    {
      type: "tip",
      value:
        "👉 Easy Trick: Router = Network to Network, Switch = Device to Device"
    },

    {
      type: "highlight",
      value:
        "Exam Point: Network technology includes wired/wireless communication and devices like router, switch, and hub."
    }
  ]
},


    // 🔹 PROTOCOLS
{
  id: "network-protocols",
  title: "Network Protocols",

  sections: [
    {
      type: "heading",
      value: "What is a Protocol?"
    },

    {
      type: "text",
      value:
        "A network protocol is a set of rules that defines how data is transmitted, received, and interpreted between devices in a network."
    },

    {
      type: "highlight",
      value:
        "Protocol = Rules for Communication between Devices"
    },

    {
      type: "heading",
      value: "Why Protocols are Important?"
    },

    {
      type: "list",
      items: [
        "Ensure proper communication between devices",
        "Define data format and transmission method",
        "Avoid errors and confusion in communication",
        "Enable reliable and secure data transfer"
      ]
    },

    {
      type: "heading",
      value: "Common Protocols"
    },

    {
      type: "list",
      items: [
        "HTTP (HyperText Transfer Protocol) → Used for web browsing",
        "FTP (File Transfer Protocol) → Used for transferring files",
        "TCP/IP → Core protocol suite used in the Internet",
        "SMTP → Used for sending emails"
      ]
    },

    {
      type: "example",
      value:
        "Example: When you open a website, your browser uses HTTP to communicate with the server"
    },

    {
      type: "tip",
      value:
        "👉 Easy Trick: No Protocol = No Communication"
    },

    {
      type: "highlight",
      value:
        "Exam Point: Protocols are rules that control data communication between network devices."
    }
  ]
},


    // 🔹 OSI MODEL
{
  id: "osi-model",
  title: "OSI Model",

  sections: [
    {
      type: "heading",
      value: "What is OSI Model?"
    },

    {
      type: "text",
      value:
        "OSI (Open Systems Interconnection) model is a framework that divides network communication into 7 layers to simplify understanding and troubleshooting."
    },

    {
      type: "highlight",
      value:
        "OSI Model = 7 Layers for Communication"
    },

    {
      type: "heading",
      value: "7 Layers of OSI Model"
    },

    {
      type: "list",
      items: [
        "1. Physical Layer → Transmits raw bits (cables, signals)",
        "2. Data Link Layer → Error detection & frame handling",
        "3. Network Layer → Routing and IP addressing",
        "4. Transport Layer → End-to-end communication (TCP/UDP)",
        "5. Session Layer → Manages sessions/connection",
        "6. Presentation Layer → Data formatting, encryption",
        "7. Application Layer → User interaction (HTTP, FTP)"
      ]
    },

    {
      type: "heading",
      value: "Function"
    },

    {
      type: "list",
      items: [
        "Breaks communication into smaller parts",
        "Each layer has a specific role",
        "Makes troubleshooting easier",
        "Ensures structured communication"
      ]
    },

    {
      type: "example",
      value:
        "Example: Sending a message → Each layer processes data step-by-step before reaching the receiver"
    },

    {
      type: "tip",
      value:
        "👉 Memory Trick: All People Seem To Need Data Processing"
    },

    {
      type: "highlight",
      value:
        "Exam Point: OSI model has 7 layers that manage communication in a structured way."
    }
  ]
},


// 🔹 TCP/IP
{
  id: "tcp-ip-model",
  title: "TCP/IP Model",

  sections: [
    {
      type: "heading",
      value: "What is TCP/IP Model?"
    },

    {
      type: "text",
      value:
        "TCP/IP (Transmission Control Protocol / Internet Protocol) is a practical network model used for real-world communication over the internet."
    },

    {
      type: "highlight",
      value:
        "TCP/IP = Real-world communication model used in Internet"
    },

    {
      type: "heading",
      value: "Layers of TCP/IP Model"
    },

    {
      type: "list",
      items: [
        "1. Application Layer → User services (HTTP, FTP, Email)",
        "2. Transport Layer → End-to-end communication (TCP/UDP)",
        "3. Internet Layer → IP addressing and routing",
        "4. Network Access Layer → Data transmission (hardware, cables)"
      ]
    },

    {
      type: "heading",
      value: "Key Features"
    },

    {
      type: "list",
      items: [
        "Used in real-world networking",
        "Supports internet communication",
        "Simpler than OSI model",
        "Reliable and scalable"
      ]
    },

    {
      type: "example",
      value:
        "Example: Opening a website uses TCP/IP to send and receive data between browser and server"
    },

    {
      type: "tip",
      value:
        "👉 Shortcut: OSI = Theory, TCP/IP = Practical"
    },

    {
      type: "highlight",
      value:
        "Exam Point: TCP/IP model has 4 layers used for real-world internet communication."
    }
  ]
},
// 🔹 PHYSICAL LAYER
{
  id: "physical-layer",
  title: "Physical Layer",

  sections: [
    {
      type: "heading",
      value: "What is Physical Layer?"
    },

    {
      type: "text",
      value:
        "The Physical Layer is the lowest layer of the OSI model. It is responsible for transmitting raw bits (0s and 1s) through physical medium like cables or wireless signals."
    },

    {
      type: "highlight",
      value:
        "Physical Layer = Transmission of raw binary data (0s and 1s)"
    },

    {
      type: "heading",
      value: "Functions"
    },

    {
      type: "list",
      items: [
        "Transmits raw bits over the network",
        "Defines cables, connectors, and signals",
        "Controls data transmission rate",
        "Handles electrical and physical connection"
      ]
    },

    {
      type: "heading",
      value: "Components"
    },

    {
      type: "list",
      items: [
        "Cables (Ethernet, Fiber)",
        "Signals (Electrical, Optical, Radio)",
        "Transmission methods"
      ]
    },

    {
      type: "example",
      value:
        "Example: Ethernet cable sending binary data (0s and 1s) between devices"
    },

    {
      type: "tip",
      value:
        "👉 Shortcut: Physical Layer = Hardware + Signals"
    },

    {
      type: "highlight",
      value:
        "Exam Point: Physical layer transmits raw bits through cables or signals."
    }
  ]
},

// 🔹 GUIDED MEDIA
{
  id: "guided-media",
  title: "Guided Transmission Media",

  sections: [
    {
      type: "heading",
      value: "What is Guided Media?"
    },

    {
      type: "text",
      value:
        "Guided transmission media uses physical cables to transmit data signals from one device to another."
    },

    {
      type: "highlight",
      value:
        "Guided Media = Wired Communication using cables"
    },

    {
      type: "heading",
      value: "Types of Guided Media"
    },

    {
      type: "list",
      items: [
        "Twisted Pair Cable → Low cost, used in telephone and LAN",
        "Coaxial Cable → Better shielding, used in TV and internet",
        "Fiber Optic Cable → Uses light, very high speed and long distance"
      ]
    },

    {
      type: "heading",
      value: "Key Features"
    },

    {
      type: "list",
      items: [
        "Secure communication (less interference)",
        "Stable and reliable transmission",
        "Used in wired networks",
        "Speed varies based on cable type"
      ]
    },

    {
      type: "example",
      value:
        "Example: Fiber optic cables are used in high-speed internet connections"
    },

    {
      type: "tip",
      value:
        "👉 Shortcut: Fiber = Fastest, Twisted = Cheapest"
    },

    {
      type: "highlight",
      value:
        "Exam Point: Guided media uses cables like twisted pair, coaxial, and fiber optic for data transmission."
    }
  ]
},

    // 🔹 WIRELESS
{
  id: "wireless-transmission",
  title: "Wireless Transmission",

  sections: [
    {
      type: "heading",
      value: "What is Wireless Transmission?"
    },

    {
      type: "text",
      value:
        "Wireless transmission uses electromagnetic waves to transmit data without using physical cables."
    },

    {
      type: "highlight",
      value:
        "Wireless = Communication without wires using signals"
    },

    {
      type: "heading",
      value: "Types of Wireless Communication"
    },

    {
      type: "list",
      items: [
        "WiFi → Short-range internet access",
        "Bluetooth → Device-to-device communication",
        "Satellite → Long-distance/global communication"
      ]
    },

    {
      type: "heading",
      value: "Key Features"
    },

    {
      type: "list",
      items: [
        "No physical cables required",
        "Flexible and easy to use",
        "Supports mobility (mobile devices)",
        "May have interference issues"
      ]
    },

    {
      type: "example",
      value:
        "Example: Mobile hotspot sharing internet to laptop using WiFi"
    },

    {
      type: "tip",
      value:
        "👉 Shortcut: Wireless = No wires + High flexibility"
    },

    {
      type: "highlight",
      value:
        "Exam Point: Wireless transmission uses electromagnetic waves like WiFi and Bluetooth for communication."
    }
  ]
},

    // 🔹 RADIO
{
  id: "radio-transmission",
  title: "Radio Transmission",

  sections: [
    {
      type: "heading",
      value: "What is Radio Transmission?"
    },

    {
      type: "text",
      value:
        "Radio transmission uses radio waves (a type of electromagnetic waves) to send data over long distances without cables."
    },

    {
      type: "highlight",
      value:
        "Radio Transmission = Long-distance wireless communication using radio waves"
    },

    {
      type: "heading",
      value: "Features"
    },

    {
      type: "list",
      items: [
        "Covers large geographical area",
        "No need for physical cables",
        "Signals can pass through walls and obstacles",
        "Less secure due to open transmission"
      ]
    },

    {
      type: "example",
      value:
        "Example: FM radio broadcasting, walkie-talkie communication"
    },

    {
      type: "tip",
      value:
        "👉 Shortcut: Radio = Long range but less security"
    },

    {
      type: "highlight",
      value:
        "Exam Point: Radio transmission uses radio waves for long-distance wireless communication."
    }
  ]
},


    // 🔹 MICROWAVE
{
  id: "microwave-transmission",
  title: "Microwave Transmission",

  sections: [
    {
      type: "heading",
      value: "What is Microwave Transmission?"
    },

    {
      type: "text",
      value:
        "Microwave transmission uses high-frequency electromagnetic waves to transmit data over long distances using a line-of-sight path."
    },

    {
      type: "highlight",
      value:
        "Microwave = High frequency + Line-of-sight communication"
    },

    {
      type: "heading",
      value: "Features"
    },

    {
      type: "list",
      items: [
        "Requires direct line-of-sight between sender and receiver",
        "Uses high-frequency signals",
        "Supports high-speed data transmission",
        "Affected by obstacles like buildings and weather"
      ]
    },

    {
      type: "example",
      value:
        "Example: Satellite communication and tower-to-tower transmission"
    },

    {
      type: "tip",
      value:
        "👉 Shortcut: Microwave = Direct path, no obstacles"
    },

    {
      type: "highlight",
      value:
        "Exam Point: Microwave transmission uses high-frequency signals and requires line-of-sight communication."
    }
  ]
},

// 🔹 CELLULAR
{
  id: "cellular-networks",
  title: "Cellular Networks",

  sections: [
    {
      type: "heading",
      value: "What is Cellular Network?"
    },

    {
      type: "text",
      value:
        "A cellular network divides a large geographic area into smaller regions called cells, each served by a base station to provide mobile communication."
    },

    {
      type: "highlight",
      value:
        "Cellular Network = Area divided into cells + Base stations"
    },

    {
      type: "heading",
      value: "Features"
    },

    {
      type: "list",
      items: [
        "Divides large area into small cells",
        "Each cell has a base station (tower)",
        "Supports mobile communication",
        "Allows handoff between cells while moving"
      ]
    },

    {
      type: "heading",
      value: "Applications"
    },

    {
      type: "list",
      items: [
        "Used in 2G, 3G, 4G, 5G mobile networks",
        "Voice calls, SMS, mobile internet",
        "Used in smartphones and wireless devices"
      ]
    },

    {
      type: "example",
      value:
        "Example: Mobile towers providing internet and call services in different areas"
    },

    {
      type: "tip",
      value:
        "👉 Shortcut: Cell = Area + Tower (Base Station)"
    },

    {
      type: "highlight",
      value:
        "Exam Point: Cellular networks divide area into cells, each served by a base station for mobile communication."
    }
  ]
}

  ]
};

export default unit1;