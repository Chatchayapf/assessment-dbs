// Task 1: Budget Meal Deal
// The owner wants to introduce a budget-friendly meal deal promotion and needs to identify
// which menu items could be included. To qualify, an item must be priced under $10.00,
// so they can offer good value without cutting too deep into margins.
//
// Hint: Write a query to find all menu items in the menu_items collection that have a price less than 10.00.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task1_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:

// ต้องดูก่อนว่าสิ่งที่ต้องการคืออะไรและอยู่ตรงไหน แล้วหาสิ่งที่เราต้องการ โดยที่ดูรายการแต่ละ Collection
// แล้วเราจะพบว่าข้อมูลแต่ละ Collection มีอะไรบ้าง จากนั้นเราจะเจอ Doc ที่เราต้องการค้นหา 
// จากนั้นเราใส่ query ที่เราต้องการค้นหาลงไป และต้องใส่ find ด้วย จากโจทย์จะหาเมนูที่ price ต่ำกว่า $10
// ซึ่งต้องการข้อมูลจาก Collection menu_items ที่มีข้อมูลที่เกี่ยว price อยู่ในนั้น 
// แล้วใช้ $lt lower than เพื่อหาค่าที่น้อยกว่า $10

use("chrome-burger-db");
  db.menu_items.find({ 
      price: { $lt: 10.00 } });