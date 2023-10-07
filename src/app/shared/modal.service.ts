import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector,
} from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(
    private overlay: Overlay,
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector
  ) {}

  open<T>(component: any, config: OverlayConfig) {
    const overlayRef = this.overlay.create(config);
    const componentRef: ComponentRef<T> = this.attach<T>(component, overlayRef);
    return { overlay: overlayRef, instance: componentRef.instance };
  }

  attach<T>(component: any, overlayRef: OverlayRef): ComponentRef<T> {
    const injector = Injector.create({
      providers: [{ provide: OverlayRef, useValue: overlayRef }],
      parent: this.injector,
    });

    const componentPortal = new ComponentPortal(component, null, injector);
    const componentRef: any = overlayRef.attach(componentPortal);

    return componentRef;
  }
}
