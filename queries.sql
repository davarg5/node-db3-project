-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

select
    p.productname,
    c.categoryname
from product p
join category c
on p.CategoryId = c.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

select
    o.id,
    s.companyName
from [Order] o
join shipper s
on o.shipVia = s.id
where date(o.orderDate) < date('2012-08-09')


-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

select 
    p.productname,
    o.quantity
from product p
join orderdetail o
on p.id = o.productid
where o.orderid = 10251


-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

select 
    o.id,
    c.companyname,
    substr(c.contactname,  INSTR(c.contactname, ' ')) as "lastName"
from [order] o
join customer c
on o.customerid = c.id
