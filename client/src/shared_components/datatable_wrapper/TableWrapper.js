import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DataTable } from 'primereact/datatable'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { ContextMenu } from 'primereact/contextmenu'
export default class TableWrapper extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    menu: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    checkSelectionState: PropTypes.array.isRequired,
    checkSelectionChange: PropTypes.func.isRequired,
    contextSelectedItem: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    let header = (
      <div style={{ textAlign: 'left' }}>
        <i className='pi pi-search' style={{ margin: '4px 4px 0 0' }} />
        <InputText
          type='search'
          onInput={e => this.setState({ globalFilter: e.target.value })}
          placeholder='Global Search'
          size='50'
        />
      </div>
    )

    const rowOptions = [10, 20, 30, 40, 50]
    let footer = (
      <div className='p-clearfix' style={{ width: '100%' }}>
        {this.props.addNew}
      </div>
    )
    return (
      <div>
        <ContextMenu model={this.props.menu} ref={el => (this.cm = el)} />

        <DataTable
          ref={this.props.dt}
          contextMenuSelection={this.props.contextSelectedItem}
          onContextMenuSelectionChange={this.props.contextSelectedItemChange}
          onContextMenu={e => this.cm.show(e.originalEvent)}
          responsive
          value={this.props.list}
          expandedRows={this.props.expandedRows}
          rowExpansionTemplate={this.props.expandedTemplate}
          paginator
          paginatorTemplate='FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown'
          rowsPerPageOptions={rowOptions}
          rows={10}
          header={header}
          footer={footer}
          onRowClick={this.props.rowClick}
          autoLayout
          globalFilter={this.state.globalFilter}
          selection={this.props.checkSelectionState}
          onSelectionChange={this.props.checkSelectionChange}
        >
          {this.props.children}
        </DataTable>
      </div>
    )
  }
}
