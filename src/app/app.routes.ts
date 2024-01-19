import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MinionsComponent } from './minions/minions.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Input } from '@angular/core';
import { MinionInfoComponent } from './minion-info/minion-info.component';
import { AddMinionComponent } from './add-minion/add-minion.component';
import { EditMinionComponent } from './edit-minion/edit-minion.component';
import { DeleteMinionComponent } from './delete-minion/delete-minion.component';

export const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'minions',
        component: MinionsComponent,
        children: [
            {
                path: 'info/:id',
                component: MinionInfoComponent
            }
        ]
    },
    {
        path: 'minions/:searchTerm',
        component: MinionsComponent,
        children: [
            {
                path: 'info/:id',
                component: MinionInfoComponent
            }
        ]
    },
    //Estas tres rutas podrian ir al mismo componente, filtrando su comportamiento por los parametros que les pasamos
    {
        path: 'add',
        component: AddMinionComponent
    },
    {
        path: 'edit/:id',
        component: EditMinionComponent
    },
    {
        path: 'delete/:id',
        component: DeleteMinionComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
