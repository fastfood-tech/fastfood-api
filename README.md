<h1> Fastfood API</h1>
<p>This is the backend system for the <a href="https://github.com/fastfood-tech/fastfood">Fastfood project</a>, which aims to create a user-friendly and efficient system for processing orders in a fast-food restaurant. It provides features such as streamlining the ordering process, facilitating easy tracking of orders, and enhancing overall customer satisfaction.   </p>

Api key Features:

- The user can get a small amount of products.
- The user has the option to filter products by name, code, or categoryId.
- The user can save ordered products and customer's name for kitchen and delivery purposes.
- The user can retrieve details of all currently open orders.
- The kitchen staff can mark orders as completed or delivered. 
  - Note: Delivered orders are considered closed and will not appear when retrieving orders.

<h2>Required Technologies</h2>

- Git 
- NodeJs
- Npm
- PostgreSql

<h2>How to Run</h2>

1 - Clone the repository:
```bash
git clone https://github.com/fastfood-tech/fastfood-api
```
2 - Navigate to the project folder:
```bash
cd fastfood-api
```
3 - In your project, create a file named .env in the root directory.

4 - Open the .env file and add the following line:
```bash
PORT=5000
DATABASE_URL=<your_postgres_databas_url>
```

5 - Save the .env file.

6 - install dependecies:
```bash
npm i
```
7 - Update database:
```bash
npx prisma migrate dev
```
7 - run dev script:
```bash
npm run dev
```
8 - Use api endpoints at http://localhost/api or see its documentation at http://localhost/api-docs
