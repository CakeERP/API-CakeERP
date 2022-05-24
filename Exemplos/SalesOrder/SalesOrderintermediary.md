# SalesOrder

**POST**: SalesOrderintermediary | **URL**: /api/sales_orders_intermediary
<table>
   <thead>
      <tr>
         <th>Atributos</th>
         <th>Descrição</th>
         <th>Formato</th>
         <th>Valores</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>sales_orders_id*</td>
         <td>Identificador do&nbsp;pedido</td>
         <td>Inteiro</td>
         <td></td>
      </tr>
      <tr>
         <td>fiscal_operations_intermediary_id*</td>
         <td>Identificador tipo de Operação</td>
         <td>Inteiro</td>
         <td><strong>1</strong> - Não se aplica<br><strong>2</strong> - Operação presencial<br><strong>3</strong> - Operação não presencial, pela Internet<br><strong>4</strong> - Operação não presencial, Teleatendimento<br><strong>5</strong> - NFC-e em operação com entrega a domicílio<br><strong>6</strong> - Operação presencial, fora do estabelecimento<br><strong>7</strong> - Operação não presencial, outros</td>
      </tr>
      <tr>
         <td>ind_intermed</td>
         <td>Indicativo do Intermediador</td>
         <td>Booleano</td>
         <td><strong>True</strong> - Operação em site ou Plataformas de Terceiros<br><strong>False</strong> - Operação sem intermediador (em site ou plataforma própria</td>
      </tr>
      <tr>
         <td>inf_intermed</td>
         <td>Nome do Intermediador</td>
         <td>Texto</td>
         <td></td>
      </tr>
      <tr>
         <td>doc_cnpj</td>
         <td>CNPJ do Intermediador</td>
         <td>Inteiro</td>
         <td></td>
      </tr>
   </tbody>
</table>
