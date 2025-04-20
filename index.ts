class Televisor {
    private estaPrendido: boolean;
    private decodificador: Decodificador;

    constructor() {
        this.estaPrendido = false;
        this.decodificador = new Decodificador(); // Creamos el decodificador desde el televisor
    }

    public prenderApagar(): void {
        this.estaPrendido = !this.estaPrendido;
    }

    public subirVolumen(): void {
        if (this.estaPrendido) {
            this.decodificador.subirVolumen();
        }
    }

    public bajarVolumen(): void {
        if (this.estaPrendido) {
            this.decodificador.bajarVolumen();
        }
    }

    public subirCanal(): void {
        if (this.estaPrendido) {
            this.decodificador.subirCanal();
        }
    }

    public bajarCanal(): void {
        if (this.estaPrendido) {
            this.decodificador.bajarCanal();
        }
    }

    public cambiarCanal(canal: number): void {
        if (this.estaPrendido) {
            this.decodificador.cambiarCanal(canal);
        }
    }

    public verCanalActual(): number {
        return this.decodificador.verCanalActual();
    }

    public verVolumenActual(): number {
        return this.decodificador.verVolumenActual();
    }
}

// Clase Decodificador definida afuera, pero es usada exclusivamente dentro de Televisor
class Decodificador {
    private volumen: number;
    private canal: number;

    constructor() {
        this.volumen = 10;
        this.canal = 1;
    }

    public subirVolumen(): void {
        if (this.volumen < 100) {
            this.volumen++;
        }
    }

    public bajarVolumen(): void {
        if (this.volumen > 0) {
            this.volumen--;
        }
    }

    public subirCanal(): void {
        this.canal++;
    }

    public bajarCanal(): void {
        if (this.canal > 1) {
            this.canal--;
        }
    }

    public cambiarCanal(canal: number): void {
        if (canal > 0) {
            this.canal = canal;
        }
    }

    public verCanalActual(): number {
        return this.canal;
    }

    public verVolumenActual(): number {
        return this.volumen;
    }
}
const miTv = new Televisor();

miTv.prenderApagar(); // Encender
miTv.subirCanal();
miTv.subirVolumen();
miTv.subirVolumen();

console.log("Canal:", miTv.verCanalActual());
console.log("Volumen:", miTv.verVolumenActual());
