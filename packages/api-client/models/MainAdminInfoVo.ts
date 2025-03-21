/**
 * Api Document
 * Backend_Server Api Document
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Primary administrator information vo
*/
export class MainAdminInfoVo {
    /**
    * Name
    */
    'name'?: string;
    /**
    * Head portrait address
    */
    'avatar'?: string;
    /**
    * Position
    */
    'position'?: string;
    /**
    * Mobile phone area code
    */
    'areaCode'?: string;
    /**
    * Phone number
    */
    'mobile'?: string;
    /**
    * Email
    */
    'email'?: string;
    /**
    * Whether the member has modified the nickname
    */
    'isMemberNameModified'?: boolean;
    /**
    * default avatar color number
    */
    'avatarColor'?: number;
    /**
    * Nick Name
    */
    'nickName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "avatar",
            "baseName": "avatar",
            "type": "string",
            "format": ""
        },
        {
            "name": "position",
            "baseName": "position",
            "type": "string",
            "format": ""
        },
        {
            "name": "areaCode",
            "baseName": "areaCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "mobile",
            "baseName": "mobile",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "isMemberNameModified",
            "baseName": "isMemberNameModified",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "avatarColor",
            "baseName": "avatarColor",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "nickName",
            "baseName": "nickName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MainAdminInfoVo.attributeTypeMap;
    }

    public constructor() {
    }
}

