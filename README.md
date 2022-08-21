**API Informations**

**Expense Category CURD API**

      '/expence/api/v1/expencecat'
      method - POST // for creating expense category

      body data = {
             "name": "Insurance", // name of category(mandotory)
             "desc": "LIC",       // descrition of category(optional)
            }

      '/expence/api/v1/expencecat'
            method - GET // for getting all expenses category

      '/expence/api/v1/expencecat/:id'
      method - GET // for getting one expense category id=> category id

      '/expence/api/v1/expencecat/:id'
            method - PUT // for update one expense category id=> category id
            body data = {
             "name": "Insurance", // name of category(mandotory)
             "desc": "LIC",       // descrition of category(optional)
            }

      '/expence/api/v1/expencecat/:id'
            method - DELETE // for delete one expense category id=> category id

**Income Category CURD API**

      '/expence/api/v1/incomecat'
      method - POST // for creating income category
            body data = {
             "name": "Salary",              // name of category(mandotory)
             "desc": "From company",       // descrition of category(optional)
            }

      '/expence/api/v1/incomecat'
            method - GET // for getting all income category

      '/expence/api/v1/incomecat/:id'
      method - GET // for getting one income category id=> category id

      '/expence/api/v1/incomecat/:id'
            method - PUT // for update one income category id=> category id

             body data = {
             "name": "Salary",              // name of category(mandotory)
             "desc": "From company",       // descrition of category(optional)
            }


      '/expence/api/v1/incomecat/:id'
            method - DELETE // for delete one income category id=> category id

**Income Transaction CURD API**

      '/expence/api/v1/incometranction'
      Method - POST  // creating income transaction
      body data = {
                        "day": 20,    // date of transaction(day)
                        "month": 8,   // month of transaction
                        "year": 2022, // year of transaction
                        "amount": 900,// amount of transaction
                        "desc": "Aug month salary", // description of transaction
                        "IncomeCatId": 1 // catogory of income
                  }

      '/expence/api/v1/incometranction'
      Method - GET  // getting all income transactions
      id - transaction id

      '/expence/api/v1/incometranction/:id'
      Method - GET  // getting all income transactions
      id - transaction id

      '/expence/api/v1/incometranction/:id'
      Method - PUT  // update income transactions
      id - transaction id
      body data = {
                        "day": 20,    // date of transaction(day)
                        "month": 8,   // month of transaction
                        "year": 2022, // year of transaction
                        "amount": 900,// amount of transaction
                        "desc": "Aug month salary", // description of transaction
                        "IncomeCatId": 1 // catogory of income
                  } 

      '/expence/api/v1/incometranction/:id'
       Method - DELETE  // update income transactions
      id - transaction id

**Expense Transaction CURD API**

      '/expence/api/v1/expensetranscation'
      Method - POST  // creating Expense transaction
      body data = {
                        "day": 20,    // date of transaction(day)
                        "month": 8,   // month of transaction
                        "year": 2022, // year of transaction
                        "amount": 900,// amount of transaction
                        "desc": "Aug month salary", // description of transaction
                        "ExpenseCatId": 1 // catogory of expense
                  }

      '/expence/api/v1/expensetranscation'
      Method - GET  // getting all expense transactions
      id - transaction id

      '/expence/api/v1/expensetranscation/:id'
      Method - GET  // getting all expense transactions
      id - transaction id

      '/expence/api/v1/expensetranscation/:id'
      Method - PUT  // update expense transactions
      id - transaction id
      body data = {
                        "day": 20,    // date of transaction(day)
                        "month": 8,   // month of transaction
                        "year": 2022, // year of transaction
                        "amount": 900,// amount of transaction
                        "desc": "Aug month salary", // description of transaction
                        "ExpenseCatId": 1 // catogory of income
                  } 

      '/expence/api/v1/expensetranscation/:id'
       Method - DELETE  // update expense transactions
      id - transaction id# expenseManagerNodeproject
