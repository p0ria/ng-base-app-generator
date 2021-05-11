import { applicationGenerator } from '@nrwl/angular/generators'
import { formatFiles, installPackagesTask } from '@nrwl/devkit'
import { updateJsonFile } from '@nrwl/workspace'

export default async function (host: any, schema: any) {
  await applicationGenerator(host, { name: schema.name, e2eTestRunner: 'none' })
  await formatFiles(host);
  return () => {
    installPackagesTask(host);
    updateJsonFile('angular.json', value => value.projects[schema.name].architect.build.options.styles.push(`apps/${schema.name}/src/assets/css/tailwind.css`))
    const scripts = {
      [`watch:${schema.name}`]: `cross-env PROJECT=${schema.name} npm run tw && cross-env PROJECT=${schema.name} npm-run-all -p tw:watch start:${schema.name}`,
      [`start:${schema.name}`]: `nx serve ${schema.name}`,
    }
    updateJsonFile('package.json', value => value.scripts = { ...value.scripts, ...scripts });
  };
}
