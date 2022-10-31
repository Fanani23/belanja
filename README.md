# belanja

Install project : 
```
npm install 
```

Run project : 
```
npm run dev 
```

# CATEGORY
[GET] get all category
```
/category
```

[POST] create category
```
/category
```
body:
```
{
    "category_name": "Category1"
}
```

[PUT] update category
```
/category/1
```
body:
```
{
    "category_name": "Category2"
}
```

[DELETE] delete category
```
/categories/1
```


# PRODUCT
[GET] get all products with join category
```
/product
```

[GET] get product with filter : sortby, sort, page dan limit
```
/product/filter?sortby=price&sort=desc&limit=10&page=1
```

[GET] get product with search by name
```
/products/search?name=prod
```

[POST] create product
```
/product
```
body:
```
{
    "poduct_name": "Product1",
    "stock": 1,
    "price": 2000,
    "category_id": 1
}
```

[PUT] update product
```
/product/1
```
body:
```
{
    "category_name": "Category2",
    "stock": 2,
    "price": 3000,
    "categories_id": 1
}
```


[DELETE] delete product
```
/product/1
```

# PAY_METHOD
[GET] get all payment_method
```
/pay_method
```

[POST] create payment_method
```
/pay_method
```
body:
```
{
    "payment_method": "BRI"
}
```

[PUT] update payment_method
```
/pay_method/1
```
body:
```
{
    "payment_method": "BNI"
}
```

[DELETE] delete payment_method
```
/pay_method/1
```

# PAY_STATUS
[GET] get all payment_status
```
/pay_status
```

[POST] create payment_status
```
/pay_status
```
body:
```
{
    "payment_status": "PAID"
}
```

[PUT] update payment_status
```
/pay_status/1
```
body:
```
{
    "payment_status": "UNPAID"
}
```

[DELETE] delete payment_status
```
/pay_status/1
```

# CUSTOMER
[GET] get all customer
```
/customer 
```

[POST] create customer
```
/customer
```
body:
```
{
    "customer_name": "pramudia",
    "email": "pramudia@gmail.com"
    "customer_status": "VIP"
}
```

[PUT] update customer
```
/customer/1
```
body:
```
{
    "customer_name": "pramudiasf",
    "email": "pramudia@gmail.com"
    "customer_status": "REGULAR"
}
```

[DELETE] delete customer
```
/customer/1
```

# TRANSACTION
[GET] get all transaction
```
/transaction
```

[POST] create transaction
```
/transaction
```
body:
```
{
    "customers_id": 1,
    "products_id": 1,
    "ammount": 2,
    "total": 4000,
    "pay_method_id": 1,
    "pay_status_id": 2
}
```

[PUT] update transaction
```
/transaction/1
```
body:
```
{
    "customers_id": 2,
    "products_id": 2,
    "ammount": 4,
    "total": 8000,
    "pay_method_id": 1,
    "pay_status_id": 2
}
```


[DELETE] delete transaction
```
/transaction/1
```
