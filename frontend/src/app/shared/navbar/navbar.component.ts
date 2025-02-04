import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {
    role: string | null;

    constructor(private router: Router) { }

    ngOnInit(): void {
        console.log(localStorage.getItem("role"));
        this.role = localStorage.getItem("role");
    }

    logout(): void {
        localStorage.removeItem('token')
        this.router.navigate(["/auth"]);
    }

    onAddNewSupplier () {
        this.router.navigate(['/supplylink/supplier'])
    }

    onAddNewProduct () {
        this.router.navigate(['/supplylink/product']);
    }

    onAddNewWarehouse () {
        this.router.navigate(['/supplylink/warehouse']);
    }
}
