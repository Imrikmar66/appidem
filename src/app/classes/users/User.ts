import { Role } from "./Role";
import { Person, PersonLiteral } from "../core/Person";
import { Model, ModelLiteral } from "../commons/Model";
import { Permission, PermissionLiteral } from "./Permission";

export class User extends Model<UserLiteral> {
    
    private _password_hash: string;
    private _person: Person;
    private _permission: Permission;


    public toLiteral(): UserLiteral {
        return {
            id: this.id,
            password_hash: this._password_hash,
            permission: this._permission.toLiteral(),
            person: this._person.toLiteral()
        };
    }

    public hydrate( data: UserLiteral ){
        
        this._password_hash = data.password_hash;
        this._permission = new Permission( data.permission );
        this._person = new Person( data.person );

    }

}

interface UserLiteral extends ModelLiteral {
    password_hash: string;
    permission: PermissionLiteral;
    person: PersonLiteral;
}