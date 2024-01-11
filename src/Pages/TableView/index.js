import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import styles from './styles';

export default class TableView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['ID', 'X', 'Y', 'Z'],
    };
  }

  render() {
    const { state } = this;
    const tableData = [];
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < 4; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }

    return (
      <View style={styles.container}>
        <Table borderStyle={styles.headerTable}>
          <Row
            data={state.tableHead}
            style={styles.header}
            textStyle={styles.headerText}
          />
        </Table>
        <ScrollView
          style={styles.dataWrapper}
          showsVerticalScrollIndicator={false}
        >
          <Table borderStyle={styles.bodyTable}>
            {
              tableData.map((rowData, index) => (
                <Row
                  key={rowData}
                  data={rowData}
                  style={[styles.row, index % 2 && { backgroundColor: '#F7EBFF' }]}
                  textStyle={styles.bodyText}
                />
              ))
            }
          </Table>
        </ScrollView>
      </View>
    );
  }
}
