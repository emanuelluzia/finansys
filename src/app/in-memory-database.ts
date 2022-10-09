import { InMemoryDbService } from "angular-in-memory-web-api";
import { Category } from "./pages/categories/shared/category.model"
export class InMemoryDatabase implements InMemoryDbService {
    createDb(){
        const categories: Category[] = [
          { id: 1, name: "Home", description: "House Bills" },
          { id: 2, name: "Health", description: "Health Care and medicines" },
          { id: 3, name: "Leisure", description: "Cinema, park, beach, etc" },
          { id: 4, name: "Wage", description: "Salary of the month" },
          { id: 5, name: "Freelas", description: "Freelancer Jobs" }
        ];

        return { categories }
    }

}