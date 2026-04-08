# 🧪 Test Cases — E-commerce Application

---

## 🔐 Login Module

### ✅ TC_001 — Valid Login

**Preconditions:**
- User is registered

**Test Steps:**
1. Navigate to login page
2. Enter valid username
3. Enter valid password
4. Click Login

**Test Data:**
- Username: standard_user
- Password: secret_sauce

**Expected Result:**
- User is redirected to inventory page

**Priority:** High  
**Type:** Positive  

---

### ❌ TC_002 — Invalid Login

**Preconditions:**
- User is on login page

**Test Steps:**
1. Enter invalid username
2. Enter invalid password
3. Click Login

**Expected Result:**
- Error message is displayed

**Priority:** High  
**Type:** Negative  

---

## 🛒 Inventory Module

### 🛍️ TC_003 — Add Item to Cart

**Preconditions:**
- User is logged in

**Steps:**
1. Click "Add to Cart" on a product
2. Click cart icon

**Expected Result:**
- Product appears in cart

**Priority:** High  
**Type:** Functional  

---

## 💳 Checkout Module

### ✅ TC_004 — Successful Checkout

**Preconditions:**
- Product added to cart

**Steps:**
1. Go to cart
2. Click checkout
3. Enter valid details
4. Click finish

**Expected Result:**
- Order confirmation message displayed

**Priority:** High  
**Type:** End-to-End  

---

### ❌ TC_005 — Checkout with Empty Fields

**Steps:**
1. Go to checkout page
2. Leave fields empty
3. Click continue

**Expected Result:**
- Validation error displayed

**Priority:** High  
**Type:** Negative  