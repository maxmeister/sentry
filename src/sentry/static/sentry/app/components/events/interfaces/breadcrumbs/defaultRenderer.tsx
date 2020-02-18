import React from 'react';

import CrumbTable from 'app/components/events/interfaces/breadcrumbs/crumbTable';
import SummaryLine from 'app/components/events/interfaces/breadcrumbs/summaryLine';
import {getMeta} from 'app/components/events/meta/metaProxy';

import BreadcrumbCustomRendererValue from './breadcrumbCustomRendererValue';
import {Crumb} from './types';

type Props = {
  crumb: Crumb;
};

const DefaultRenderer = ({crumb}: Props) => (
  <CrumbTable
    crumb={crumb}
    summary={
      <SummaryLine>
        {crumb.message && (
          <pre>
            <code>
              <BreadcrumbCustomRendererValue
                value={crumb.message}
                meta={getMeta(crumb, 'message')}
              />
            </code>
          </pre>
        )}
      </SummaryLine>
    }
    kvData={crumb.data}
  />
);

export default DefaultRenderer;
