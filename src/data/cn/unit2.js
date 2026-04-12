const unit2 = {
  id: "unit-2",
  title: "Unit II – Data Link Layer",

  topics: [

// 🔹 DESIGN ISSUES
{
  id: "dll-design-issues",
  title: "Data Link Layer Design Issues",
  sections: [

    {
      type: "text",
      value:
        "Data Link Layer ensures reliable and efficient communication between adjacent nodes by organizing data into frames, detecting errors, and controlling the flow of data."
    },

    {
      type: "heading",
      value: "Main Design Issues"
    },

    {
      type: "list",
      items: [
        "Services to Network Layer",
        "Framing",
        "Error Control",
        "Flow Control"
      ]
    },

    {
      type: "text",
      value:
        "Each issue focuses on improving reliability: Services define delivery type, Framing organizes data, Error Control ensures correctness, and Flow Control manages transmission speed."
    },

    {
      type: "example",
      value:
        "Example: When sending data via WiFi, it is divided into frames, checked for errors, and transmitted at a controlled speed."
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: Service → Frame → Check → Control"
    },

    {
      type: "highlight",
      value:
        "DLL works only between directly connected nodes (Hop-to-Hop)"
    },

    {
      type: "keywords",
      items: [
        "Hop-to-Hop",
        "Reliability",
        "Framing",
        "Error Control",
        "Flow Control",
        "Efficiency"
      ]
    }

  ]
},

// 🔹 SERVICES
{
  id: "dll-services",
  title: "Services to Network Layer",
  sections: [

    {
      type: "text",
      value:
        "The Data Link Layer provides different types of services to the Network Layer to ensure proper delivery of frames with or without reliability."
    },

    {
      type: "heading",
      value: "Types of Services"
    },

    {
      type: "list",
      items: [
        "Unacknowledged Connectionless Service",
        "Acknowledged Connectionless Service",
        "Acknowledged Connection-Oriented Service"
      ]
    },

    {
      type: "text",
      value:
        "Unacknowledged Connectionless: No ACK, fast but unreliable.\n\nAcknowledged Connectionless: No connection setup, but ACK is used.\n\nConnection-Oriented: Connection is established and all frames are acknowledged."
    },

    {
      type: "example",
      value:
        "Example: Video streaming = connectionless (speed priority), File transfer = connection-oriented (reliability priority)."
    },

    {
      type: "tip",
      value:
        "👉 No ACK = Fast | With ACK = Reliable"
    },

    {
      type: "highlight",
      value:
        "Connection-Oriented service provides highest reliability"
    },

    {
      type: "keywords",
      items: [
        "Connectionless",
        "Connection-Oriented",
        "ACK",
        "Reliability",
        "Frame Delivery"
      ]
    }

  ]
},

    // 🔹 FRAMING
{
  id: "framing",
  title: "Framing",
  sections: [

    {
      type: "text",
      value:
        "Framing is the process of dividing a continuous stream of data into smaller units called frames for efficient and reliable transmission."
    },

    {
      type: "highlight",
      value:
        "Frame = Header + Data + Trailer"
    },

    {
      type: "heading",
      value: "Framing Methods"
    },

    {
      type: "list",
      items: [
        "Character Count",
        "Byte Stuffing",
        "Bit Stuffing"
      ]
    },

    {
      type: "text",
      value:
        "Character Count specifies frame size. Byte Stuffing adds special bytes to separate data. Bit Stuffing inserts extra bits to avoid confusion with flag patterns."
    },

    {
      type: "example",
      value:
        "Example: If flag pattern 01111110 appears in data, bit stuffing adds a 0 to prevent misinterpretation."
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: Framing = Divide + Identify + Protect"
    },

    {
      type: "highlight",
      value:
        "Purpose → Data separation + Synchronization + Error handling support"
    },

    {
      type: "keywords",
      items: [
        "Frame",
        "Header",
        "Trailer",
        "Byte Stuffing",
        "Bit Stuffing",
        "Synchronization"
      ]
    }

  ]
},

// 🔹 ERROR CONTROL
{
  id: "error-control",
  title: "Error Control",
  sections: [

    {
      type: "text",
      value:
        "Error Control ensures reliable transmission by detecting, correcting, and retransmitting corrupted data frames."
    },

    {
      type: "heading",
      value: "Functions"
    },

    {
      type: "list",
      items: [
        "Error Detection",
        "Error Correction",
        "Retransmission (ARQ)"
      ]
    },

    {
      type: "text",
      value:
        "Error Detection uses techniques like CRC. Error Correction fixes errors using codes like Hamming. ARQ requests retransmission when errors are detected."
    },

    {
      type: "example",
      value:
        "Example: During file download, if a packet is corrupted, it is retransmitted using ARQ."
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: Detect → Correct → Retransmit"
    },

    {
      type: "highlight",
      value:
        "Goal → Reliable and error-free communication"
    },

    {
      type: "keywords",
      items: [
        "CRC",
        "Hamming Code",
        "ARQ",
        "ACK/NACK",
        "Reliability"
      ]
    }

  ]
},

// 🔹 FLOW CONTROL
{
  id: "flow-control",
  title: "Flow Control",
  sections: [

    {
      type: "text",
      value:
        "Flow Control is a mechanism that regulates the rate of data transmission between sender and receiver to prevent receiver overload and ensure smooth data transfer."
    },

    {
      type: "heading",
      value: "Techniques"
    },

    {
      type: "list",
      items: [
        "Stop-and-Wait Protocol",
        "Sliding Window Protocol"
      ]
    },

    {
      type: "text",
      value:
        "Stop-and-Wait: Sender transmits one frame and waits for acknowledgment before sending the next.\n\nSliding Window: Sender can transmit multiple frames before receiving acknowledgment, improving efficiency and throughput."
    },

    {
      type: "example",
      value:
        "Example: Stop-and-Wait is like sending one message and waiting for reply. Sliding Window is like sending multiple messages continuously."
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: Stop = Slow, Sliding = Fast"
    },

    {
      type: "highlight",
      value:
        "Purpose → Prevent overload + Improve efficiency"
    },

    {
      type: "keywords",
      items: [
        "Data Rate Control",
        "Stop-and-Wait",
        "Sliding Window",
        "Buffer",
        "Throughput"
      ]
    }

  ]
},

// 🔹 ERROR HANDLING
{
  id: "error-handling",
  title: "Error Handling",
  sections: [

    {
      type: "text",
      value:
        "Error Handling includes techniques used to detect and correct errors in transmitted data to maintain data integrity and reliability."
    },

    {
      type: "heading",
      value: "Types"
    },

    {
      type: "list",
      items: [
        "Error Detecting Codes",
        "Error Correcting Codes"
      ]
    },

    {
      type: "text",
      value:
        "Error Detecting Codes: Identify errors using methods like Parity Check, CRC, and Checksum.\n\nError Correcting Codes: Correct errors without retransmission using techniques like Hamming Code and Forward Error Correction."
    },

    {
      type: "example",
      value:
        "Example: CRC is widely used in Ethernet and WiFi to detect transmission errors."
    },

    {
      type: "tip",
      value:
        "👉 Detect = Find error | Correct = Fix error"
    },

    {
      type: "highlight",
      value:
        "CRC = Most reliable and widely used error detection method"
    },

    {
      type: "keywords",
      items: [
        "CRC",
        "Hamming Code",
        "Parity",
        "Checksum",
        "Data Integrity",
        "FEC"
      ]
    }

  ]
},

// 🔹 MAC
{
  id: "mac-sublayer",
  title: "Medium Access Control",
  sections: [

    {
      type: "text",
      value:
        "Medium Access Control (MAC) is a sublayer of the Data Link Layer that controls how multiple devices access a shared communication channel and prevents data collisions."
    },

    {
      type: "heading",
      value: "Functions"
    },

    {
      type: "list",
      items: [
        "Channel Access Control",
        "Collision Avoidance",
        "Fair Resource Sharing"
      ]
    },

    {
      type: "text",
      value:
        "MAC ensures that only one device transmits at a time, reducing collisions and improving network efficiency."
    },

    {
      type: "example",
      value:
        "Example: In WiFi, multiple devices compete to send data, but MAC decides which device can transmit first."
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: MAC = Who sends and when?"
    },

    {
      type: "highlight",
      value:
        "Goal → Avoid collision + Efficient channel usage"
    },

    {
      type: "keywords",
      items: [
        "Collision",
        "Access Control",
        "Shared Channel",
        "Efficiency",
        "Fairness"
      ]
    }

  ]
},

// 🔹 CHANNEL ALLOCATION
{
  id: "channel-allocation",
  title: "Channel Allocation",
  sections: [

    {
      type: "text",
      value:
        "Channel Allocation determines how available bandwidth is shared among multiple users in a network efficiently."
    },

    {
      type: "heading",
      value: "Types"
    },

    {
      type: "list",
      items: [
        "Static Allocation",
        "Dynamic Allocation"
      ]
    },

    {
      type: "text",
      value:
        "Static Allocation divides the channel into fixed parts assigned to users.\n\nDynamic Allocation assigns bandwidth based on demand, improving efficiency and reducing wastage."
    },

    {
      type: "example",
      value:
        "Example: Static → Time slots in TV broadcasting. Dynamic → Internet bandwidth usage."
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: Static = Fixed, Dynamic = Smart usage"
    },

    {
      type: "highlight",
      value:
        "Dynamic allocation is more efficient in real-world networks"
    },

    {
      type: "keywords",
      items: [
        "Bandwidth Sharing",
        "Static",
        "Dynamic",
        "Efficiency",
        "Multiplexing"
      ]
    }

  ]
},
// 🔹 ALOHA
{
  id: "aloha",
  title: "ALOHA Protocol",
  sections: [

    {
      type: "text",
      value:
        "ALOHA is a random access protocol used in shared communication channels where devices transmit data without checking the channel, which may lead to collisions."
    },

    {
      type: "heading",
      value: "Types"
    },

    {
      type: "list",
      items: [
        "Pure ALOHA",
        "Slotted ALOHA"
      ]
    },

    {
      type: "text",
      value:
        "Pure ALOHA allows transmission at any time, leading to high collision probability.\n\nSlotted ALOHA divides time into slots and allows transmission only at slot boundaries, reducing collisions and improving efficiency."
    },

    {
      type: "example",
      value:
        "Example: Pure ALOHA is like speaking anytime in a group. Slotted ALOHA is like speaking only during your turn."
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: Slot = Control = Less collision"
    },

    {
      type: "highlight",
      value:
        "Efficiency: Pure ≈ 18% | Slotted ≈ 36%"
    },

    {
      type: "keywords",
      items: [
        "Random Access",
        "Collision",
        "Time Slots",
        "Throughput",
        "Efficiency"
      ]
    }

  ]
},

// 🔹 CSMA
{
  id: "csma",
  title: "CSMA",
  sections: [

    {
      type: "text",
      value:
        "Carrier Sense Multiple Access (CSMA) is a protocol where devices check (sense) the channel before transmitting to reduce collisions."
    },

    {
      type: "highlight",
      value:
        "Listen before transmit"
    },

    {
      type: "heading",
      value: "Types"
    },

    {
      type: "list",
      items: [
        "1-persistent CSMA",
        "Non-persistent CSMA",
        "p-persistent CSMA"
      ]
    },

    {
      type: "text",
      value:
        "1-persistent: Transmit immediately when channel is free.\n\nNon-persistent: Wait randomly if channel is busy.\n\np-persistent: Transmit with probability p when channel is free."
    },

    {
      type: "example",
      value:
        "Example: Before sending data, a device checks if the channel is free like checking traffic before crossing a road."
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: CSMA = Check channel first"
    },

    {
      type: "highlight",
      value:
        "Reduces collision compared to ALOHA"
    },

    {
      type: "keywords",
      items: [
        "Carrier Sense",
        "Collision Avoidance",
        "Persistent",
        "Backoff",
        "Efficiency"
      ]
    }

  ]
},
// 🔹 SWITCHING
{
  id: "dll-switching",
  title: "Switching",
  sections: [

    {
      type: "text",
      value:
        "Switching is the process of forwarding data frames between devices within a network using hardware (MAC) or logical (IP) addresses."
    },

    {
      type: "heading",
      value: "Devices"
    },

    {
      type: "list",
      items: [
        "Bridge",
        "Switch",
        "Router"
      ]
    },

    {
      type: "text",
      value:
        "Bridge connects LAN segments and filters traffic.\n\nSwitch is an advanced bridge that forwards frames faster using MAC address table.\n\nRouter connects different networks and uses IP addresses for routing."
    },

    {
      type: "example",
      value:
        "Example: A switch connects computers in a lab, while a router connects the lab to the internet."
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: Bridge = Basic, Switch = Fast, Router = Network connector"
    },

    {
      type: "highlight",
      value:
        "Switch uses MAC | Router uses IP"
    },

    {
      type: "keywords",
      items: [
        "MAC Address",
        "IP Address",
        "Frame Forwarding",
        "Routing",
        "LAN"
      ]
    }

  ]
},

// 🔹 WIRELESS
{
  id: "wireless-networks",
  title: "Wireless Networks",
  sections: [

    {
      type: "text",
      value:
        "Wireless Networks use radio signals instead of physical cables to transmit data, enabling mobility and flexible communication."
    },

    {
      type: "heading",
      value: "Characteristics"
    },

    {
      type: "list",
      items: [
        "Mobility",
        "Signal Interference",
        "Noise",
        "Limited Bandwidth"
      ]
    },

    {
      type: "text",
      value:
        "Wireless communication is affected by obstacles, interference, and noise, which can reduce signal strength and data quality."
    },

    {
      type: "example",
      value:
        "Example: WiFi signal becomes weak when walls block the signal or distance increases."
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: Wireless = Flexible but Unstable"
    },

    {
      type: "highlight",
      value:
        "Advantage → Mobility | Disadvantage → Interference"
    },

    {
      type: "keywords",
      items: [
        "Radio Signals",
        "Mobility",
        "Interference",
        "Noise",
        "Bandwidth"
      ]
    }

  ]
},

// 🔹 802.11
{
  id: "wifi-80211",
  title: "802.11",
  sections: [

    {
      type: "text",
      value:
        "IEEE 802.11 is a standard that defines Wireless Local Area Networks (WLAN), commonly known as WiFi."
    },

    {
      type: "text",
      value:
        "It specifies communication protocols, frequency bands, data rates, and security for wireless networks."
    },

    {
      type: "example",
      value:
        "Example: When a mobile or laptop connects to WiFi, it uses the 802.11 standard."
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: 802.11 = WiFi standard"
    },

    {
      type: "highlight",
      value:
        "Used in all modern wireless communication systems"
    },

    {
      type: "keywords",
      items: [
        "IEEE",
        "WLAN",
        "WiFi",
        "Radio Frequency",
        "Standard"
      ]
    }

  ]
},
// 🔹 ARCHITECTURE
{
  id: "wireless-architecture",
  title: "Wireless Architecture",
  sections: [

    {
      type: "text",
      value:
        "Wireless Architecture defines how devices are organized and communicate in a wireless network using access points and stations."
    },

    {
      type: "heading",
      value: "Components"
    },

    {
      type: "list",
      items: [
        "Access Point (AP)",
        "Stations (Devices)",
        "Infrastructure Mode",
        "Ad-hoc Mode"
      ]
    },

    {
      type: "text",
      value:
        "Access Point acts as a central hub.\n\nStations are devices like mobiles and laptops.\n\nInfrastructure Mode uses AP for communication.\n\nAd-hoc Mode allows direct communication between devices without AP."
    },

    {
      type: "example",
      value:
        "Example: Home WiFi uses Infrastructure mode, while Bluetooth sharing works like Ad-hoc mode."
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: Infra = With AP | Ad-hoc = Direct"
    },

    {
      type: "highlight",
      value:
        "Infrastructure mode is most commonly used in real networks"
    },

    {
      type: "keywords",
      items: [
        "Access Point",
        "Stations",
        "Infrastructure",
        "Ad-hoc",
        "Wireless Network"
      ]
    }

  ]
},

// 🔹 MAC PROTOCOL
{
  id: "wireless-mac",
  title: "Wireless MAC",
  sections: [

    {
      type: "text",
      value:
        "Wireless MAC Protocol controls how devices access the wireless channel using collision avoidance techniques."
    },

    {
      type: "heading",
      value: "Techniques"
    },

    {
      type: "list",
      items: [
        "CSMA/CA (Collision Avoidance)",
        "Backoff Algorithm"
      ]
    },

    {
      type: "text",
      value:
        "CSMA/CA avoids collisions by checking channel and waiting before transmission.\n\nBackoff Algorithm introduces random delay to reduce chances of collision."
    },

    {
      type: "example",
      value:
        "Example: WiFi devices wait for a random time before sending data to avoid collision."
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: CA = Avoid collision (Wireless uses CA, not CD)"
    },

    {
      type: "highlight",
      value:
        "Wireless uses CSMA/CA, Wired uses CSMA/CD"
    },

    {
      type: "keywords",
      items: [
        "CSMA/CA",
        "Backoff",
        "Collision Avoidance",
        "Wireless",
        "Channel Access"
      ]
    }

  ]
}
  ]
};

export default unit2;