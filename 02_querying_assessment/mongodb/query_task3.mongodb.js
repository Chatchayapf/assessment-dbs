// Task 3: Stock Replenishment Check
// Before placing the weekly supply order, the manager wants to avoid over-ordering ingredients
// that are already well-stocked. They need a list of every ingredient with a stock level
// of 100 or more so those can be deprioritised in this week's order.
//
// Hint: Write a query to find all ingredients in the ingredients collection that have a stock_level of 100.00 or more.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task3_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:

// จากโจทย์ต้องการหาวัตถุดิบทั้งหมดที่มีสต็อกเหลือ "100 หรือมากกว่า" 
// เพื่อจะได้รู้ว่าอันไหน "ยังไม่ต้องสั่งเพิ่ม" ในรอบสั่งของประจำสัปดาห์นี้
// ซึ่งจะอยู่ใน Collection "ingredients" (โดยจะใช้ Find คือคำสั่งให้เข้าไปค้นหาข้อมูลใน collection ที่เรากำหนด)
// จากนั้นเราใส่ query ที่เราต้องการค้นหาลงไป นั้นคือ stock_level และ ต้องใส่ field ด้วย 
// เพราะเราต้องการสินค้าที่มากกว่า 100 ชิ้น เลยเลือกใส่ $gte (greater than or equal to)

use("chrome-burger-db");
db.ingredients.find({ 
    stock_level: { $gte: 100.00 } });