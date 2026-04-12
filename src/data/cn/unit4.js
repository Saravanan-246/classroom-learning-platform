const unit4 = {
  id: "unit-4",
  title: "Unit IV – Transport Layer",

  topics: [

    // 🔹 SERVICES
{
  id: "transport-services",
  title: "Services to Upper Layers",

  sections: [

    {
      type: "text",
      value:
        "The Transport Layer provides end-to-end communication between processes running on different hosts, ensuring reliable and ordered data delivery."
    },

    {
      type: "heading",
      value: "Services Provided"
    },

    {
      type: "list",
      items: [
        "Process-to-Process Delivery",
        "Segmentation and Reassembly",
        "Error Control",
        "Flow Control"
      ]
    },

    {
      type: "text",
      value:
        "Process-to-Process Delivery ensures communication between applications.\n\nSegmentation divides data into smaller segments and reassembles at destination.\n\nError Control detects and corrects errors.\n\nFlow Control manages transmission speed."
    },

    {
      type: "example",
      value:
        "Example: While sending a file, data is split into segments, transmitted, and reassembled correctly at the receiver."
    },

    {
      type: "highlight",
      value:
        "Ensures reliable, ordered, and complete data transfer"
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: Process → Segment → Check → Control"
    },

    {
      type: "keywords",
      items: [
        "End-to-End",
        "Segmentation",
        "Reassembly",
        "Error Control",
        "Flow Control",
        "Reliability"
      ]
    }

  ]
},

// 🔹 PROTOCOLS
{
  id: "transport-protocols",
  title: "Transport Protocols",

  sections: [

    {
      type: "text",
      value:
        "Transport Protocols define how data is transmitted between applications, ensuring communication efficiency and reliability."
    },

    {
      type: "heading",
      value: "Types of Protocols"
    },

    {
      type: "list",
      items: [
        "UDP (User Datagram Protocol)",
        "TCP (Transmission Control Protocol)",
        "RPC (Remote Procedure Call)",
        "RTP (Real-Time Transport Protocol)"
      ]
    },

    {
      type: "text",
      value:
        "UDP provides fast but unreliable communication.\n\nTCP provides reliable and ordered communication.\n\nRPC allows remote function execution.\n\nRTP is used for real-time multimedia transmission."
    },

    {
      type: "example",
      value:
        "Example: Video streaming uses UDP for speed, while file transfer uses TCP for reliability."
    },

    {
      type: "highlight",
      value:
        "TCP = Reliable | UDP = Fast"
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: TCP = Safe, UDP = Speed"
    },

    {
      type: "keywords",
      items: [
        "TCP",
        "UDP",
        "RPC",
        "RTP",
        "Reliability",
        "Latency"
      ]
    }

  ]
},

// 🔹 UDP
{
  id: "udp",
  title: "User Datagram Protocol (UDP)",

  sections: [

    {
      type: "text",
      value:
        "UDP is a connectionless transport protocol that provides fast data transmission without guaranteeing reliability or order."
    },

    {
      type: "heading",
      value: "Characteristics"
    },

    {
      type: "list",
      items: [
        "No connection setup",
        "No error recovery",
        "No flow control",
        "Low latency"
      ]
    },

    {
      type: "text",
      value:
        "UDP sends data quickly without checking delivery, making it suitable for time-sensitive applications."
    },

    {
      type: "example",
      value:
        "Example: Online gaming, live streaming, and DNS use UDP for faster communication."
    },

    {
      type: "highlight",
      value:
        "Fast but unreliable communication"
    },

    {
      type: "tip",
      value:
        "👉 UDP = Speed over reliability"
    },

    {
      type: "keywords",
      items: [
        "UDP",
        "Connectionless",
        "Fast",
        "Low Latency",
        "No Reliability"
      ]
    }

  ]
},
// 🔹 RPC
{
  id: "rpc",
  title: "Remote Procedure Call (RPC)",

  sections: [

    {
      type: "text",
      value:
        "Remote Procedure Call (RPC) is a communication protocol that allows a program to execute a function or procedure on a remote machine as if it were a local function call."
    },

    {
      type: "text",
      value:
        "It hides the details of network communication and makes remote interaction simple and transparent to the user."
    },

    {
      type: "example",
      value:
        "Example: A client application requests data from a server by calling a remote function, and the server executes it and returns the result."
    },

    {
      type: "highlight",
      value:
        "Client calls remote function like a local function"
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: RPC = Call function anywhere"
    },

    {
      type: "keywords",
      items: [
        "RPC",
        "Client-Server",
        "Remote Call",
        "Distributed Systems",
        "Function Execution"
      ]
    }

  ]
},
// 🔹 RTP
{
  id: "rtp",
  title: "Real-Time Transport Protocol",

  sections: [

    {
      type: "text",
      value:
        "Real-Time Transport Protocol (RTP) is used for transmitting real-time audio and video data over networks with minimal delay."
    },

    {
      type: "heading",
      value: "Features"
    },

    {
      type: "list",
      items: [
        "Low delay (real-time transmission)",
        "Supports streaming media",
        "Works over UDP",
        "Provides timing and sequence information"
      ]
    },

    {
      type: "text",
      value:
        "RTP ensures timely delivery of multimedia data but does not guarantee reliability, making it suitable for live communication."
    },

    {
      type: "example",
      value:
        "Example: Video calls, live streaming, and online meetings use RTP."
    },

    {
      type: "highlight",
      value:
        "Used in real-time applications like video conferencing"
    },

    {
      type: "tip",
      value:
        "👉 RTP = Real-time (speed more important than accuracy)"
    },

    {
      type: "keywords",
      items: [
        "RTP",
        "Real-Time",
        "Streaming",
        "UDP",
        "Low Latency"
      ]
    }

  ]
},

// 🔹 TCP INTRO
{
  id: "tcp",
  title: "Transmission Control Protocol (TCP)",

  sections: [

    {
      type: "text",
      value:
        "Transmission Control Protocol (TCP) is a connection-oriented transport protocol that provides reliable, ordered, and error-free data delivery between applications."
    },

    {
      type: "text",
      value:
        "TCP establishes a connection before transmission and ensures data integrity using acknowledgments and retransmission."
    },

    {
      type: "example",
      value:
        "Example: File transfer, email, and web browsing use TCP for reliable communication."
    },

    {
      type: "highlight",
      value:
        "Ensures ordered, reliable, and error-free delivery"
    },

    {
      type: "tip",
      value:
        "👉 TCP = Safe and reliable communication"
    },

    {
      type: "keywords",
      items: [
        "TCP",
        "Connection-Oriented",
        "Reliable",
        "ACK",
        "Retransmission"
      ]
    }

  ]
},
// 🔹 TCP SERVICE MODEL
{
  id: "tcp-service-model",
  title: "TCP Service Model",

  sections: [

    {
      type: "text",
      value:
        "TCP Service Model defines the features provided by TCP to ensure reliable, ordered, and continuous data transmission between applications."
    },

    {
      type: "heading",
      value: "Features"
    },

    {
      type: "list",
      items: [
        "Connection-oriented",
        "Reliable delivery",
        "Full duplex communication",
        "Flow control"
      ]
    },

    {
      type: "text",
      value:
        "TCP establishes a connection before data transfer.\n\nIt ensures reliable delivery using acknowledgments.\n\nFull duplex allows simultaneous two-way communication.\n\nFlow control prevents receiver overload."
    },

    {
      type: "example",
      value:
        "Example: While downloading a file, TCP ensures all data arrives correctly and in order."
    },

    {
      type: "highlight",
      value:
        "Provides reliable and ordered communication"
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: Connect → Send → Check → Control"
    },

    {
      type: "keywords",
      items: [
        "Connection-Oriented",
        "Reliable",
        "Full Duplex",
        "Flow Control",
        "Ordered Delivery"
      ]
    }

  ]
},

// 🔹 TCP PROTOCOL
{
  id: "tcp-protocol",
  title: "TCP Protocol",

  sections: [

    {
      type: "text",
      value:
        "TCP Protocol ensures reliable data transmission using sequence numbers, acknowledgments, and retransmission mechanisms."
    },

    {
      type: "text",
      value:
        "It divides data into segments, tracks each segment, and ensures correct delivery in proper order."
    },

    {
      type: "example",
      value:
        "Example: If a segment is lost, TCP retransmits it after not receiving acknowledgment."
    },

    {
      type: "highlight",
      value:
        "Uses Sequence Numbers and ACKs for reliability"
    },

    {
      type: "tip",
      value:
        "👉 TCP = Send → ACK → Resend if needed"
    },

    {
      type: "keywords",
      items: [
        "Sequence Number",
        "ACK",
        "Retransmission",
        "Reliability",
        "Segment"
      ]
    }

  ]
},

    // 🔹 TCP HEADER
{
  id: "tcp-header",
  title: "TCP Segment Header",

  sections: [

    {
      type: "text",
      value:
        "TCP Segment Header contains control information required for reliable data transmission between sender and receiver."
    },

    {
      type: "heading",
      value: "Important Fields"
    },

    {
      type: "list",
      items: [
        "Source Port",
        "Destination Port",
        "Sequence Number",
        "Acknowledgment Number",
        "Window Size"
      ]
    },

    {
      type: "text",
      value:
        "Source/Destination Port identify applications.\n\nSequence Number ensures correct order.\n\nAcknowledgment Number confirms received data.\n\nWindow Size controls data flow."
    },

    {
      type: "example",
      value:
        "Example: TCP uses sequence numbers to reorder packets received out of order."
    },

    {
      type: "highlight",
      value:
        "Ensures reliable and ordered data delivery"
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: Port → Seq → ACK → Window"
    },

    {
      type: "keywords",
      items: [
        "TCP Header",
        "Sequence Number",
        "ACK",
        "Port",
        "Window Size"
      ]
    }

  ]
},

// 🔹 CONNECTION
{
  id: "tcp-connection",
  title: "TCP Connection Establishment & Release",

  sections: [

    {
      type: "text",
      value:
        "TCP establishes a connection using a 3-way handshake and releases it using a 4-step termination process."
    },

    {
      type: "heading",
      value: "Connection Establishment (3-Way Handshake)"
    },

    {
      type: "list",
      items: [
        "SYN (Client → Server)",
        "SYN-ACK (Server → Client)",
        "ACK (Client → Server)"
      ]
    },

    {
      type: "text",
      value:
        "First, the client sends SYN.\n\nServer replies with SYN-ACK.\n\nClient sends ACK to establish connection."
    },

    {
      type: "heading",
      value: "Connection Release"
    },

    {
      type: "list",
      items: [
        "FIN",
        "ACK",
        "FIN",
        "ACK"
      ]
    },

    {
      type: "example",
      value:
        "Example: When opening a website, TCP establishes connection using handshake before data transfer."
    },

    {
      type: "highlight",
      value:
        "3-Way Handshake ensures reliable connection setup"
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: SYN → SYN-ACK → ACK"
    },

    {
      type: "keywords",
      items: [
        "3-Way Handshake",
        "SYN",
        "ACK",
        "FIN",
        "Connection"
      ]
    }

  ]
},
// 🔹 SLIDING WINDOW
{
  id: "tcp-sliding-window",
  title: "TCP Sliding Window",

  sections: [

    {
      type: "text",
      value:
        "TCP Sliding Window is a flow control mechanism that allows the sender to transmit multiple packets before receiving acknowledgments."
    },

    {
      type: "text",
      value:
        "The window size determines how many bytes can be sent without waiting for an acknowledgment, improving transmission efficiency."
    },

    {
      type: "example",
      value:
        "Example: Instead of sending one packet and waiting, TCP sends multiple packets continuously within the window size."
    },

    {
      type: "highlight",
      value:
        "Allows multiple packets before receiving ACK"
    },

    {
      type: "tip",
      value:
        "👉 Sliding Window = More data, less waiting"
    },

    {
      type: "keywords",
      items: [
        "Window Size",
        "Flow Control",
        "ACK",
        "Efficiency",
        "Throughput"
      ]
    }

  ]
},

// 🔹 CONGESTION CONTROL
{
  id: "tcp-congestion",
  title: "TCP Congestion Control",

  sections: [

    {
      type: "text",
      value:
        "TCP Congestion Control manages network traffic to avoid congestion and ensure smooth data transmission."
    },

    {
      type: "heading",
      value: "Techniques"
    },

    {
      type: "list",
      items: [
        "Slow Start",
        "Congestion Avoidance",
        "Fast Retransmit",
        "Fast Recovery"
      ]
    },

    {
      type: "text",
      value:
        "Slow Start increases transmission rate gradually.\n\nCongestion Avoidance controls growth to prevent overload.\n\nFast Retransmit resends lost packets quickly.\n\nFast Recovery restores transmission speed after loss."
    },

    {
      type: "example",
      value:
        "Example: When network traffic increases, TCP reduces speed to avoid packet loss."
    },

    {
      type: "highlight",
      value:
        "Prevents network congestion and improves performance"
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: Start slow → Grow → Recover"
    },

    {
      type: "keywords",
      items: [
        "Congestion Control",
        "Slow Start",
        "Fast Retransmit",
        "Recovery",
        "Network Traffic"
      ]
    }

  ]
}

  ]
};

export default unit4;