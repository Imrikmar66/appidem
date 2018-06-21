import { Privilege, PrivilegeLiteral } from "./Privilege";
import { Role, RoleLiteral } from "./Role";
import { Model, ModelLiteral } from "../commons/Model";

export class Permission extends Model<PermissionLiteral> {

    private _role: Role;
    private _privileges: Privilege[];

    public toLiteral(): PermissionLiteral {
        return {
            id: this.id,
            role: this._role.toLiteral(),
            privileges: this.arrayModelToLiteralArray( this._privileges )
        }
    }

    public hydrate( data: PermissionLiteral ){

        this._role = new Role( data.role );
        this._privileges = this.privilegesLiteralsToModels( data.privileges );

    }

    private privilegesLiteralsToModels( literals: PrivilegeLiteral[] ): Privilege[] {
        
        const privileges: Privilege[] = [];
        for( let literal of literals ) {
            const privilege = new Privilege( literal );
            privileges.push( privilege );
        }
        return privileges;

    }

}

export interface PermissionLiteral extends ModelLiteral {

    role: RoleLiteral;
    privileges: PrivilegeLiteral[];

}