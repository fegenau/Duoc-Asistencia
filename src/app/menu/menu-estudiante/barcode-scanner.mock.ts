export class BarcodeScannerMock {
    scan(): Promise<any> {
      return Promise.resolve({ text: 'Código de barras simulado' });
    }
  }
  