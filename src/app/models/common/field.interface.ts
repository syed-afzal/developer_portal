export interface Validator {
  name: string;
  validator: any;
  message: string;
}

export interface FieldConfig {
  label?: string;
  name?: string;
  icon?: string;
  inputType?: string;
  options?: string[];
  collections?: any;
  type: string;
  value?: any;
  validations?: Validator[];
  validator?: any;
}
