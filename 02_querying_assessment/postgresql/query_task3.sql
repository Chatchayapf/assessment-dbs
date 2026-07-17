-- Task 3: Staff Performance Review
-- At the end of the month, the owner wants to reward the hardest-working cashiers.
-- To decide fairly, they want to see how many orders each staff member has processed,
-- with the busiest staff member appearing at the top of the list.
--
-- Hint: Write a query to find the total number of orders processed by each staff member.
-- The result should show the staff member's full name (concatenated) and their total order count,
-- ordered by the count in descending order.

-- Bonus: The dataset is identical in the MongoDB database, meaning the same business insight can be retrieved.
-- Write the equivalent query for MongoDB. See query_task3_bonus.mongodb.js

-- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:

-- โจทย์ต้องการนับจำนวนออเดอร์ที่พนักงานแต่ละคน (cashier) เคยรับผิดชอบ 
-- แล้วเรียงลำดับจากคนที่รับออเดอร์เยอะที่สุดไปน้อยที่สุด เพื่อใช้ตัดสินใจให้รางวัลพนักงานดีเด่นประจำเดือน
-- เราต้องข้อมูลชื่อพนักงานจากตาราง Staff และข้อมูลการสั่งซื้อจากตาราง Orders 
-- โดยเชื่อมตารางด้วย staff_id จากนั้นใช้ COUNT ร่วมกับ GROUP BY เพื่อแยกนับออเดอร์ตามชื่อของพนักงานแต่ละคน

-- โจทย์ต้องการการประเมินผลการปฏิบัติงานของพนักงาน เมื่อสิ้นเดือนเจ้าของร้านต้องการให้รางวัลแก่พนักงานเก็บเงิน
-- ใช้จึงใช้ SELECT เพื่อดึงคอลัมน์ first_name และ last_name ออกมาคู่กัน 
-- แล้วใช้คำสั่ง COUNT(orders.order_id) เพื่อรวบรวมนับจำนวนออเดอร์ทั้งหมด
-- ใช้คำสั่ง FROM Staff และใช้คำสั่ง INNER JOIN Orders ON Staff.staff_id = Orders.staff_id 
-- เพื่อเชื่อมข้อมูลพนักงานเข้ากับออเดอร์ ใช้คำสั่ง GROUP BY โดยระบุคอลัมน์ staff.first_name และ staff.last_name 
-- ให้ตรงกับที่เลือกไว้ใน SELECT เพื่อสั่งให้ระบบแยกกลุ่มการนับยอดออเดอร์ตามรายชื่อพนักงานด้วย
-- ใช้คำสั่ง ORDER BY order_count DESC เพื่อเรียงลำดับผลลัพธ์จากคนที่ทำยอดออเดอร์ได้มากที่สุดขึ้นก่อน

SELECT staff.first_name, staff.last_name ,
COUNT(orders.order_id) as order_count
FROM Staff
INNER JOIN Orders ON Staff.staff_id = Orders.staff_id
GROUP BY Staff.staff_id
ORDER BY order_count DESC

-- ข้อนี้ใช้ ai และเปิดของเพื่อนเจนเมทดู เพื่อไข้ข้อสงสัยและทำความเข้าใจให้มากยิ่งขึ้น