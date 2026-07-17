// Task 2: Shift Activity Report
// Jane Doe has an upcoming performance review and the manager wants to look at her order history
// ahead of the meeting. They only need to see when each order was placed and what it was worth —
// no other details are required for this particular review.
//
// Hint: Write a query to find all orders handled by the staff member "Jane Doe".
// Your query should only return the order_date and total_price fields for these orders.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task2_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:

// จากโจทย์ต้องการข้อมูลประวัติการรับ order ของ Jane Doe 
// โดยที่ต้องการข้อมูลแค่วันที่ที่รับออร์เดอร์และมูลค่าของออร์เดอร์เท่านั้น 
// เราจะใช้ข้อมูลจาก fine order แล้วใส่ query แรกที่ต้องการ คือ staff.first_name และ staff.last_name เพื่อเป็นเจาะจงตัวบุคคล
// และใส่ปีกกาที่สอง เพื่อกำหนด order_date:1 และ total_price:1, เพื่อแสดงค่าที่ต้องการ
// แล้วใส่ _id:0 (ปกติ MongoDB จะ return _id มาด้วยเสมอถ้าไม่ปิดไว้) แต่จะไม่แสดง เพราะ id:0 คือไม่แสดงค่า

use("chrome-burger-db");
db.orders.find(
    {
    "staff.first_name":"Jane",
    "staff.last_name":"Doe"
    },
    {
        order_date:1,
        total_price:1,
        _id:0
    }
);