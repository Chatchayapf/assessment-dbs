// Task 4: Total Revenue Summary
// At the end of the trading period, the owner wants a single figure that shows how much revenue
// the truck has generated across all recorded orders. This number will be used in their
// financial summary report, so the result should be returned as a single value named total_revenue.
//
// Hint: Write an aggregation query on the orders collection to calculate the total revenue from all orders combined.
// The result should be a single document with a field named total_revenue.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task4_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:

// จากโจทย์หายอดรายได้รวม จากออเดอร์ทั้งหมดที่เคยบันทึกไว้ โดยผลลัพธ์ต้องออกมาเป็น doc เดียว 
// ที่มี field ชื่อ total_revenue เพียงค่าเดียว แต่รอบนี้เราจะไม่ใช้ find() เพราะ find() 
// จะโยนใบเสร็จทุกใบกลับมาให้เรานั่งนับเอง เราเลยต้องใช้คำสั่ง "aggregate" (การประมวลผลกลุ่ม) 
// เพื่อเอาเครื่องคิดเลขมาคำนวณรวบรวมยอดขายทั้งหมดให้ออกมาเป็นตัวเลขเดียวตามที่เต้องการ
// ใช้คำสั่ง db.orders.aggregate([]) ซึ่งข้างในวงเล็บเหลี่ยมเราจะใส่ Stage การทำงานเข้าไป
// ใช้ Stage ที่ชื่อว่า "$group" เพื่อทำการรวมกลุ่มข้อมูล 
// ด้านใน $group เรากำหนด "_id": null เพื่อบอกระบบว่า "รวมให้เป็นอันเดียว ไม่ต้องแบ่งย่อย"
// จากนั้นสร้างฟิลด์ใหม่ขึ้นมาชื่อ "total_revenue" โดยกำหนดเงื่อนไขการคำนวณคือ { "$sum": "$total_price" } 
// ซึ่งแปลว่า ให้เอาเครื่องคิดเลขไปไล่บวกรวมค่า (Sum) จากฟิลด์ total_price ในใบเสร็จทุกใบรวมกัน

use("chrome-burger-db");
db.orders.aggregate([
  {
    $group: {
      _id: null,
      total_revenue: { $sum: "$total_price" }
    }
  }
])

// ข้อนี้ยากค่ะ ยังไม่เข้าใจเท่าไร ให้ ai ช่วยและอ้างอิงจากเพื่อนในเจมเมทมาอธิบายเพิ่มเติม
// เพื่อให้ตัวเองได้เข้าใจยิ่งขึ้น และนำมาปรับเป็นภาษาที่ตัวเข้าใจ