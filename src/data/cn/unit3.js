const unit3 = {
  id: "unit-3",
  title: "Unit III – Network Layer",

  topics: [

// 🔹 NETWORK TOPOLOGIES
{
  id: "network-topologies",
  title: "Network Topologies",

  sections: [
    { type: "heading", value: "What is Topology?" },

    {
      type: "text",
      value:
        "Network Topology refers to the physical or logical arrangement of devices and how they are connected to communicate within a network."
    },

    {
      type: "heading",
      value: "Types of Topologies"
    },

    {
      type: "list",
      items: [
        "Bus Topology",
        "Star Topology",
        "Ring Topology",
        "Mesh Topology"
      ]
    },

    {
      type: "text",
      value:
        "Bus: All devices share a single communication cable.\n\nStar: All devices connect to a central hub or switch.\n\nRing: Devices are connected in a circular form.\n\nMesh: Every device is connected to all other devices."
    },

    {
      type: "example",
      value:
        "Example: In a computer lab, all systems connect to a central switch using Star topology."
    },

    {
      type: "highlight",
      value:
        "Star topology is most commonly used due to easy management and reliability"
    },

    {
      type: "tip",
      value:
        "👉 Bus = Single cable | Star = Centralized | Ring = Circular | Mesh = Fully connected"
    },

    {
      type: "keywords",
      items: [
        "Topology",
        "Bus",
        "Star",
        "Ring",
        "Mesh",
        "Network Design"
      ]
    }
  ]
},
    // 🔹 SERVICES
{
  id: "network-layer-services",
  title: "Services to Transport Layer",

  sections: [

    {
      type: "text",
      value:
        "The Network Layer provides logical communication between processes running on different hosts by delivering packets from source to destination across networks."
    },

    {
      type: "heading",
      value: "Types of Services"
    },

    {
      type: "list",
      items: [
        "Connectionless Service (IP)",
        "Connection-Oriented Service (Virtual Circuits)"
      ]
    },

    {
      type: "text",
      value:
        "Connectionless Service: No connection setup, packets are sent independently (best-effort delivery).\n\nConnection-Oriented Service: Connection is established before transmission, ensuring reliable and ordered delivery."
    },

    {
      type: "example",
      value:
        "Example: Internet Protocol (IP) uses connectionless service, where each packet is routed independently."
    },

    {
      type: "highlight",
      value:
        "Internet uses Connectionless Service (IP)"
    },

    {
      type: "tip",
      value:
        "👉 Connectionless = Fast (no setup) | Connection-Oriented = Reliable"
    },

    {
      type: "keywords",
      items: [
        "Logical Communication",
        "Packet Delivery",
        "Connectionless",
        "Virtual Circuit",
        "IP",
        "Routing"
      ]
    }

  ]
},

    // 🔹 ROUTING
{
  id: "routing-algorithms",
  title: "Routing Algorithms",

  sections: [

    {
      type: "text",
      value:
        "Routing is the process of selecting the best path for data packets to travel from source to destination across a network."
    },

    {
      type: "text",
      value:
        "Routing algorithms use metrics like distance, cost, and delay to determine the most efficient path."
    },

    {
      type: "example",
      value:
        "Example: When you browse the internet, routers decide the best path for data to reach the destination server."
    },

    {
      type: "highlight",
      value:
        "Goal → Find shortest, fastest, and most efficient path"
    },

    {
      type: "tip",
      value:
        "👉 Routing = Path selection in network"
    },

    {
      type: "keywords",
      items: [
        "Routing",
        "Path Selection",
        "Cost",
        "Delay",
        "Network"
      ]
    }

  ]
},

// 🔹 SHORTEST PATH
{
  id: "shortest-path",
  title: "Shortest Path Algorithm",

  sections: [

    {
      type: "text",
      value:
        "Shortest Path Algorithm is used to find the minimum cost path between nodes in a network graph."
    },

    {
      type: "heading",
      value: "Approach"
    },

    {
      type: "list",
      items: [
        "Dijkstra’s Algorithm",
        "Graph-based method"
      ]
    },

    {
      type: "text",
      value:
        "It calculates the shortest distance from a source node to all other nodes using weighted graphs."
    },

    {
      type: "example",
      value:
        "Example: GPS navigation uses shortest path algorithms to find the fastest route."
    },

    {
      type: "highlight",
      value:
        "Used in routing tables and network optimization"
    },

    {
      type: "tip",
      value:
        "👉 Shortest Path = Minimum cost route"
    },

    {
      type: "keywords",
      items: [
        "Dijkstra",
        "Shortest Path",
        "Graph",
        "Cost",
        "Routing Table"
      ]
    }

  ]
},
    // 🔹 DISTANCE VECTOR
{
  id: "distance-vector",
  title: "Distance Vector Routing",

  sections: [

    {
      type: "text",
      value:
        "Distance Vector Routing is a routing algorithm in which each router maintains a routing table and shares it with its neighboring routers periodically."
    },

    {
      type: "text",
      value:
        "Each router calculates the best path based on distance (cost) and updates its table using information received from neighbors."
    },

    {
      type: "highlight",
      value:
        "Based on Bellman-Ford Algorithm"
    },

    {
      type: "heading",
      value: "Characteristics"
    },

    {
      type: "list",
      items: [
        "Simple to implement",
        "Slow convergence",
        "Count-to-infinity problem"
      ]
    },

    {
      type: "text",
      value:
        "Routers exchange entire routing tables, which can lead to slow updates and routing loops in large networks."
    },

    {
      type: "example",
      value:
        "Example: RIP (Routing Information Protocol) uses Distance Vector Routing."
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: Distance Vector = Share with neighbors"
    },

    {
      type: "highlight",
      value:
        "Main issue → Count-to-Infinity problem"
    },

    {
      type: "keywords",
      items: [
        "Bellman-Ford",
        "Routing Table",
        "Neighbors",
        "RIP",
        "Convergence",
        "Count-to-Infinity"
      ]
    }

  ]
},
// 🔹 LINK STATE
{
  id: "link-state",
  title: "Link State Routing",

  sections: [

    {
      type: "text",
      value:
        "Link State Routing is a routing algorithm where each router builds a complete map of the network topology and calculates the shortest path to all nodes."
    },

    {
      type: "text",
      value:
        "Routers share link-state information with all other routers, allowing them to have a global view of the network."
    },

    {
      type: "heading",
      value: "Characteristics"
    },

    {
      type: "list",
      items: [
        "Fast convergence",
        "Uses Dijkstra’s algorithm",
        "Reliable and loop-free routing"
      ]
    },

    {
      type: "example",
      value:
        "Example: OSPF (Open Shortest Path First) uses Link State Routing."
    },

    {
      type: "highlight",
      value:
        "Each router maintains a complete network map"
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: Link State = Full network knowledge"
    },

    {
      type: "keywords",
      items: [
        "Dijkstra",
        "OSPF",
        "Topology Map",
        "Fast Convergence",
        "Link State"
      ]
    }

  ]
},

// 🔹 SDN
{
  id: "sdn",
  title: "Software Defined Networking",

  sections: [

    {
      type: "text",
      value:
        "Software Defined Networking (SDN) is a modern networking approach that separates the control plane from the data plane for centralized and flexible network management."
    },

    {
      type: "heading",
      value: "Components"
    },

    {
      type: "list",
      items: [
        "Control Plane",
        "Data Plane"
      ]
    },

    {
      type: "text",
      value:
        "Control Plane makes decisions about routing and traffic.\n\nData Plane forwards packets based on instructions from the control plane."
    },

    {
      type: "example",
      value:
        "Example: In SDN, a central controller manages the entire network instead of individual routers making decisions."
    },

    {
      type: "highlight",
      value:
        "Centralized network control improves flexibility and management"
    },

    {
      type: "tip",
      value:
        "👉 Easy trick: SDN = Separate brain (control) and work (data)"
    },

    {
      type: "keywords",
      items: [
        "SDN",
        "Control Plane",
        "Data Plane",
        "Centralized Control",
        "Network Management"
      ]
    }

  ]
},
// 🔹 CONTROL PLANE
{
  id: "control-plane",
  title: "Control Plane",

  sections: [

    {
      type: "text",
      value:
        "Control Plane is responsible for making routing decisions and determining the path that data packets should take in the network."
    },

    {
      type: "text",
      value:
        "It maintains routing tables and decides how traffic should flow across the network."
    },

    {
      type: "example",
      value:
        "Example: A router deciding the best path for a packet to reach its destination."
    },

    {
      type: "highlight",
      value:
        "Acts as the brain of the network"
    },

    {
      type: "tip",
      value:
        "👉 Control Plane = Decision making"
    },

    {
      type: "keywords",
      items: [
        "Routing",
        "Decision",
        "Control",
        "Path Selection",
        "Routing Table"
      ]
    }

  ]
},

// 🔹 DATA PLANE
{
  id: "data-plane",
  title: "Data Plane",

  sections: [

    {
      type: "text",
      value:
        "Data Plane is responsible for forwarding actual data packets based on the decisions made by the control plane."
    },

    {
      type: "text",
      value:
        "It performs fast packet forwarding using routing tables."
    },

    {
      type: "example",
      value:
        "Example: A router forwarding packets from one interface to another."
    },

    {
      type: "highlight",
      value:
        "Executes the work decided by Control Plane"
    },

    {
      type: "tip",
      value:
        "👉 Data Plane = Packet forwarding"
    },

    {
      type: "keywords",
      items: [
        "Forwarding",
        "Packets",
        "Execution",
        "Routing Table",
        "Switching"
      ]
    }

  ]
},

// 🔹 IPv4
{
  id: "ipv4",
  title: "IPv4",

  sections: [

    {
      type: "text",
      value:
        "IPv4 (Internet Protocol version 4) is a 32-bit addressing system used to uniquely identify devices on a network."
    },

    {
      type: "text",
      value:
        "It uses dotted decimal notation and supports around 4.3 billion addresses."
    },

    {
      type: "example",
      value:
        "Example: 192.168.1.1"
    },

    {
      type: "highlight",
      value:
        "32-bit address → Limited address space"
    },

    {
      type: "tip",
      value:
        "👉 Problem: Address exhaustion"
    },

    {
      type: "keywords",
      items: [
        "IPv4",
        "32-bit",
        "Dotted Decimal",
        "Address",
        "Exhaustion"
      ]
    }

  ]
},
// 🔹 IP ADDRESSING
{
  id: "ip-addressing",
  title: "IP Addressing",

  sections: [

    {
      type: "text",
      value:
        "IP Addressing is a method used to uniquely identify devices on a network using logical addresses."
    },

    {
      type: "heading",
      value: "Components"
    },

    {
      type: "list",
      items: [
        "Network ID",
        "Host ID",
        "Classes (A, B, C)"
      ]
    },

    {
      type: "text",
      value:
        "Network ID identifies the network, while Host ID identifies the device within that network. IP addresses are divided into classes such as A, B, and C based on size and usage."
    },

    {
      type: "example",
      value:
        "Example: In 192.168.1.1 → 192.168.1 is Network ID and 1 is Host ID."
    },

    {
      type: "highlight",
      value:
        "Used to uniquely identify devices in a network"
    },

    {
      type: "tip",
      value:
        "👉 Network = Area | Host = Device"
    },

    {
      type: "keywords",
      items: [
        "IP Address",
        "Network ID",
        "Host ID",
        "Classes",
        "Identification"
      ]
    }

  ]
},

// 🔹 IPv6
{
  id: "ipv6",
  title: "IPv6",

  sections: [

    {
      type: "text",
      value:
        "IPv6 (Internet Protocol version 6) is a 128-bit addressing system designed to overcome the limitations of IPv4."
    },

    {
      type: "text",
      value:
        "It provides a much larger address space and improved features for modern networking."
    },

    {
      type: "list",
      items: [
        "128-bit address space",
        "Larger address capacity",
        "Better security",
        "Efficient routing"
      ]
    },

    {
      type: "example",
      value:
        "Example: 2001:0db8:85a3:0000:0000:8a2e:0370:7334"
    },

    {
      type: "highlight",
      value:
        "Solves IPv4 address exhaustion problem"
    },

    {
      type: "tip",
      value:
        "👉 IPv6 = Bigger + Better + Future"
    },

    {
      type: "keywords",
      items: [
        "IPv6",
        "128-bit",
        "Address Space",
        "Security",
        "Routing"
      ]
    }

  ]
},
// 🔹 INTERNET CONTROL
{
  id: "internet-control-protocols",
  title: "Internet Control Protocols",

  sections: [
    {
      type: "text",
      value:
        "Internet Control Protocols are used for error reporting, diagnostics, and address resolution in network communication."
    },

    {
      type: "heading",
      value: "Types"
    },

    {
      type: "list",
      items: [
        "ICMP (Internet Control Message Protocol)",
        "ARP (Address Resolution Protocol)",
        "RARP (Reverse Address Resolution Protocol)"
      ]
    },

    {
      type: "text",
      value:
        "ICMP is used to send error and diagnostic messages.\n\nARP maps IP addresses to MAC addresses.\n\nRARP maps MAC addresses to IP addresses."
    },

    {
      type: "example",
      value:
        "Example: The ping command uses ICMP to check connectivity between devices."
    },

    {
      type: "highlight",
      value:
        "ICMP is widely used for network diagnostics"
    },

    {
      type: "tip",
      value:
        "👉 ICMP = Error | ARP = IP → MAC | RARP = MAC → IP"
    },

    {
      type: "keywords",
      items: [
        "ICMP",
        "ARP",
        "RARP",
        "Error Reporting",
        "Address Mapping",
        "Ping"
      ]
    }
  ]
} // ❗ NO COMMA HERE (last item)

  ]
};

export default unit3;