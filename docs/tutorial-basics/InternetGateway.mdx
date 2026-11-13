---
sidebar_position: 4
title: Internet Gateways (IGW) & Public Routing
description: Architectural concepts of AWS Internet Gateways and hands-on MiniStack local route table configuration.
---

import Quiz from '@site/src/components/QuizLogic/Quiz';
import AnnotationEmbedder from '@site/src/components/AnnotationEmbedder/index.js';

# Amazon VPC Internet Gateways (IGW)

> **Core Concept:** A horizontally scaled, redundant, and highly available VPC component that allows communication between instances in your VPC and the internet.

---

## 1. Whitepaper & Theoretical Foundation

An **Internet Gateway (IGW)** serves two primary purposes in your network architecture:
1. Providing a target in your VPC route tables for internet-routable traffic (`0.0.0.0/0`).
2. Performing **Network Address Translation (NAT)** for instances that have been assigned public IPv4 addresses.

### Key Architectural Concepts

* **One-to-One Attachment:** An IGW can be attached to **only one VPC at a time**, and a VPC can have **only one IGW attached** to it at any given moment.
* **Stateless & Scalable:** Unlike traditional physical hardware or self-managed VPN appliances, an IGW is managed by AWS infrastructure—it does not impose bandwidth constraints or single-point-of-failure risks.
* **Public Subnet vs. Private Subnet:**
  * A subnet is considered **public** if its route table explicitly routes default internet-bound traffic (`0.0.0.0/0`) to an attached IGW (`igw-xxxxxx`).
  * A subnet remains **private** if its route table lacks a route to an IGW (even if instances inside it possess public IP addresses).

[ Internet ]
|
v
[ Internet Gateway (IGW) ]
|
[ Route Table: 0.0.0.0/0 -> igw-xxxx ]
|
[ Public Subnet (10.0.1.0/24) ]
|
[ EC2 Instance (Public IP) ]


---

## 2. Hypothes.is Reading & Annotations

:::note Required Reading
Open the [AWS VPC User Guide: Internet Gateways](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html) or review the [AWS Amazon Virtual Private Cloud Connectivity Options Whitepaper](https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/amazon-vpc-connectivity-options.html).

**Annotation Task:** Activate your Hypothes.is Chrome extension to mark up key points:
* How IGW handles NAT translation transparently between private and public IP addresses.
* The difference in egress handling between an Internet Gateway and a NAT Gateway.
:::

---

## 3. MiniStack Hands-On Lab

In this lab, you will create a custom VPC, attach an Internet Gateway, set up a public route table, and associate it with a subnet using `awslocal`.

### Prerequisites

Ensure MiniStack is running locally:

```bash
# Verify local status
ministack status
Step 1: Create a Custom VPC and Subnet
Bash
# Create a VPC with a 10.0.0.0/16 CIDR block
VPC_ID=$(awslocal ec2 create-vpc --cidr-block 10.0.0.0/16 --query 'Vpc.VpcId' --output text)
echo "Created VPC: $VPC_ID"

# Create a subnet within the VPC
SUBNET_ID=$(awslocal ec2 create-subnet --vpc-id$VPC_ID --cidr-block 10.0.1.0/24 --query 'Subnet.SubnetId' --output text)
echo "Created Subnet: $SUBNET_ID"
Step 2: Create and Attach the Internet Gateway
Bash
# Create the Internet Gateway
IGW_ID=$(awslocal ec2 create-internet-gateway --query 'InternetGateway.InternetGatewayId' --output text)
echo "Created IGW: $IGW_ID"

# Attach the Internet Gateway to your VPC
awslocal ec2 attach-internet-gateway --vpc-id $VPC_ID --internet-gateway-id$IGW_ID
Step 3: Configure Public Route Table
An IGW alone does not grant internet access—you must explicitly route outbound traffic through it.

Bash
# Create a new route table for the public subnet
RT_ID=$(awslocal ec2 create-route-table --vpc-id$VPC_ID --query 'RouteTable.RouteTableId' --output text)

# Create a default route (0.0.0.0/0) pointing to the IGW
awslocal ec2 create-route \
  --route-table-id $RT_ID \
  --destination-cidr-block 0.0.0.0/0 \
  --gateway-id $IGW_ID

# Associate the route table with your subnet to make it "Public"
awslocal ec2 associate-route-table --subnet-id $SUBNET_ID --route-table-id$RT_ID
Step 4: Verify the Routing Configuration
Bash
# Inspect the route table to verify destination 0.0.0.0/0 points to $IGW_ID
awslocal ec2 describe-route-tables --route-table-ids $RT_ID
```
4. Concept Check

<Quiz
question="What fundamental step turns a standard private subnet inside a VPC into a 'Public Subnet'?"
choices={[
'Assigning a public IPv4 address directly to an EC2 instance inside the subnet.',
'Attaching an Internet Gateway (IGW) to the VPC and adding a route for 0.0.0.0/0 targeting the IGW in the subnet route table.',
'Disabling Network Access Control Lists (NACLs) on the subnet.',
'Enabling auto-assign public IP settings on the VPC network interface.'
]}
answer="Attaching an Internet Gateway (IGW) to the VPC and adding a route for 0.0.0.0/0 targeting the IGW in the subnet route table."
/>