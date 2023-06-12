import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { PartnerService } from "./partner.service";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint()
export class IsPartnerNameUniqueConstraint implements ValidatorConstraintInterface {

  constructor(private partnerService: PartnerService) {}

  validate(partnerName: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
    return !!!this.partnerService.findByName(partnerName);
  }
}


export function IsPartnerNameUnique(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsPartnerNameUniqueConstraint,
    });
  };
}