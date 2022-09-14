import { RuntimeDataSourceConfig as DataSourceConfig } from '@digiforce-cloud/dvd-datasource-types';

import { DataSourceType } from './DataSourceType';

export interface DataSourceFormProps {
  dataSourceType: DataSourceType;
  dataSource?: DataSourceConfig;
  dataSourceList?: DataSourceConfig[];
  readonly?: boolean;
  mode?: 'edit' | 'create';
}


export enum DataSourceFormMode {
  EDIT = 'edit',
  CREATE = 'create',
  VIEW = 'view',
}
