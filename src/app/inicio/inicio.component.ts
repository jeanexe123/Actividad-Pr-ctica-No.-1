import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  mostrarClientes: boolean = false;
  mostrarHabitaciones: boolean = false;
  mostrarReservaciones: boolean = false;
  mostrarFormularioCliente: boolean = false;
  mostrarFormularioHabitacion: boolean = false;
  mostrarFormularioReservacion: boolean = false;
  constructor() {}

  // Función para mostrar la tabla de clientes
  clientes() {
    this.mostrarClientes = true;
    this.mostrarHabitaciones = false;
    this.mostrarReservaciones = false;
    this.mostrarFormularioCliente = false;
    this.mostrarFormularioHabitacion = false;
    this.mostrarFormularioReservacion = false;
    // Aquí podrías cargar los datos de los clientes desde una fuente externa si es necesario
  }

  habitaciones() {
    this.mostrarClientes = false;
    this.mostrarHabitaciones = true;
    this.mostrarReservaciones = false;
    this.mostrarFormularioCliente = false;
    this.mostrarFormularioHabitacion = false;
    this.mostrarFormularioReservacion = false;
    // Lógica para mostrar la tabla con las habitaciones ingresadas
  }

  reservaciones() {
    this.mostrarClientes = false;
    this.mostrarHabitaciones = false;
    this.mostrarReservaciones = true;
    this.mostrarFormularioCliente = false;
    this.mostrarFormularioHabitacion = false;
    this.mostrarFormularioReservacion = false;
    // Lógica para mostrar la tabla con las reservaciones ingresadas
  }
   
  formularioCliente() {
    this.mostrarClientes = false;
    this.mostrarHabitaciones = false;
    this.mostrarReservaciones = false;
    this.mostrarFormularioCliente = true; // Mostrar el formulario
  }

  formularioHabitacion() {
    this.mostrarClientes = false;
    this.mostrarHabitaciones = false;
    this.mostrarReservaciones = false; 
    this.mostrarFormularioHabitacion = true;
  }

  formularioReservacion() {
    this.mostrarClientes = false;
    this.mostrarHabitaciones = false;
    this.mostrarReservaciones = false;
    this.mostrarFormularioReservacion = true;
  }

  guardarCliente() {
    // Lógica para guardar los datos del formulario, por ejemplo, llamando a un servicio
    // Una vez guardados los datos, puedes volver a mostrar la tabla de clientes
    this.mostrarClientes = true;
    this.mostrarFormularioCliente = false; // Ocultar el formulario después de guardar los datos
  }

  guardarHabitacion() {
  
    this.mostrarHabitaciones = true;
    this.mostrarFormularioHabitacion = false; // Ocultar el formulario después de guardar los datos
  }

  guardarReservacion() {

    this.mostrarReservaciones = true;
    this.mostrarFormularioReservacion = false; // Ocultar el formulario después de guardar los datos
  }
}
