---
layout: post
title:  "Sql or No-sql"
date:   2014-09-19 09:24:25
categories: jekyll update
---

SQL or No-SQL. Lets dive in first to explain what they are. After that we can look what is pros and cons.Right now since the start of DBC education,we are dealing with SQL databases whihc is relational databases which indicates that the tables that are in the database does have some relation to each other and all the tables have some sort of structures to follow.

On the other hand, No-SQL databases do not have any kind of relation to each other and do not have any sort of structures. The data structure  differs from the SQL databases. The common usage of data structures are key-value pair or document model.

I think the real question that we have to ask to ourselves is why did we need No-SQL databases. What are we missing with SQL databases. No-SQL databases address some of the points: being non relational, distributed, open source and horizontally scalable. One of the theorems to examine different databases is CAP thereom. the CAP theorem demonstrates that any distributed system cannot guaranty C, A, and P simultaneously, rather, trade-offs must be made at a point-in-time to achieve the level of performance and availability required for a specific task.

[C] Consistency - All the servers in the system will have the same data so anyone
using the system will get the same copy regardless of which server answers their request.

[A] Availability -  The system will always respond to a request (even if it's not the latest data or consistent across the system or just a message saying the system isn't working).

[P] Partition Tolerance - The system continues to operate as a whole even if individual servers fail or can't be reached..

SQL databases provides two of three from CAP theorem. Consistency and Availability. On the other hand No-SQL databases provides avaialability and Partition Tolerance. As you see from the above , not eveything is one-fits-all. You can pick the database that you are going to use depending on the your needs. There are limitations on speed and scaling when it comes to massive high availability data stores.Querying and inserting is not performant in these scenarios because of the blocking/schema/transaction nature of the RDBMs. That's the reason they have implemented their own databases (actually, key-value stores) for massive performance gain and scalability.