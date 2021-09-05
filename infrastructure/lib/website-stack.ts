import { CfnParameter, Construct, Stack, StackProps } from '@aws-cdk/core';

import { SiteBucket } from './constructs/site-bucket';

export class WebsiteStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const subDomain =  new CfnParameter(this, 'subDomainName', {
      type: 'String',
      description: 'The name of the sub domain that will be set as an alias record in Route53 and be used by Cloudfront'
    });

    const domainProps = { rootDomain: 'lyraddigital.com', subDomain: subDomain.valueAsString };

    new SiteBucket(this, 'SiteBucket', domainProps);
  }
}
