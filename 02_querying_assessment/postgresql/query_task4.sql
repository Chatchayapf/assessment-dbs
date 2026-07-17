-- Task 4: Supplier Dependency Check
-- The manager has just heard that 'Freshest Farm Produce' may be delayed on their next delivery.
-- Before deciding whether to source from an alternative supplier, they need to know exactly
-- which ingredients depend on that supplier, so they can assess the impact on the menu.
--
-- Hint: Write a query to find the names of all ingredients supplied by 'Freshest Farm Produce'.

-- Bonus: The dataset is identical in the MongoDB database, meaning the same business insight can be retrieved.
-- Write the equivalent query for MongoDB. See query_task4_bonus.mongodb.js

-- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:

-- โจทย์ต้องการหาว่ามีวัตถุดิบ(ingredients) ตัวไหนบ้างที่รับมาจาก supplier ชื่อ "Freshest Farm Produce" 
-- เนื่องจากอาจล่าช้าในการส่งมอบครั้งต่อไป เพื่อประเมินผลกระทบ ก่อนตัดสินใจหา supplier สำรอง
-- เริ่มจากหาชื่อวัตถุดิบก่อน ต้องหาจากตาราง ingredients ส่วนของ name
-- แต่ว่าใน ingredient มันดันไม่มีชื่อฟาร์ม งั้นจึงต้องเชื่อมข้อมูลตาราง
-- โดยใช้ inner join เพื่อเชื่อมตารางคู่ค้า ingredients กับ suppliers การเชื่อมต่อผ่านฟิลด์เชื่อมโยงใช้ ON
-- โดยที่ข้อมูลตรงส่วนที่จะเชื่อมกับคือ supplier_id ของทั้งสองตาราง ก็จะสามารถรู้ได้ว่า
-- supplier_id นั้นๆ = supplier.name และใช้ WHERE เพื่อระบุชื่อซัพพลายเออร์เป้าหมายตามที่โจทย์ต้องการ
-- WHERE Suppliers.name = 'Freshest Farm Produce' เพื่อระบุว่าต้องการเจ้านี้เท่านั้น

SELECT Ingredients.name
FROM Ingredients
INNER JOIN Suppliers 
ON Ingredients.supplier_id = Suppliers.supplier_id
WHERE Suppliers.name = 'Freshest Farm Produce'

-- ข้อนี้ใช้ ai และเปิดของเพื่อนเจนเมทดู เพื่อไข้ข้อสงสัยและทำความเข้าใจให้มากยิ่งขึ้น