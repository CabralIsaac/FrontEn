import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Proyecto } from "src/app/model/proyecto";
import { ProyectoService } from "src/app/service/proyecto.service";

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css'],
})
export class EditProyectoComponent implements OnInit {
  proyecto: Proyecto = null;
  constructor(
    private proyService: ProyectoService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyService.listaPorId(id).subscribe((data) => {
      this.proyecto = data;
    });
  }
  onUpdate(): void {
    const id: number = this.activatedRouter.snapshot.params['id'];
    this.proyService.update(id, this.proyecto).subscribe((data) => {
      this.proyService = data;
      this.router.navigate(['']);
    });
  }
}