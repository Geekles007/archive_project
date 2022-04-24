import {DataTable} from "carbon-components-react";
import styled from "styled-components";

const CustomDatatable = styled(DataTable)`
  .bx--data-table thead th.bx--table-expand, .bx--data-table tbody td.bx--table-expand {
    border-bottom: 1px solid #393939 !important;
  }
`;

export {
    CustomDatatable
}
