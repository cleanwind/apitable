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
* Space public invitation link information vo
*/
export class SpaceLinkInfoVo {
    /**
    * Creator name
    */
    'memberName'?: string;
    /**
    * Space name
    */
    'spaceName'?: string;
    /**
    * Space ID
    */
    'spaceId'?: string;
    /**
    * Whether it is in login status, not logged in
    */
    'isLogin'?: boolean;
    /**
    * Whether it already exists in the space, and directly call the switching space interface in the existing space
    */
    'isExist'?: boolean;
    /**
    * Inviter\'s personal invitation code
    */
    'inviteCode'?: string;
    /**
    * Whether enough seats in the space
    */
    'seatAvailable'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "memberName",
            "baseName": "memberName",
            "type": "string",
            "format": ""
        },
        {
            "name": "spaceName",
            "baseName": "spaceName",
            "type": "string",
            "format": ""
        },
        {
            "name": "spaceId",
            "baseName": "spaceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "isLogin",
            "baseName": "isLogin",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isExist",
            "baseName": "isExist",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "inviteCode",
            "baseName": "inviteCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "seatAvailable",
            "baseName": "seatAvailable",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SpaceLinkInfoVo.attributeTypeMap;
    }

    public constructor() {
    }
}

