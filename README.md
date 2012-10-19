# Soda-Tracker

Soda tracker is a web app that can be used to keep track of soda-pop consumption at for example a work place.

The app was created because we needed it at our office to track the balance for each person in the office.

## ToDo list

* Translate readme into english
* Create the bloody app

## Functionality

- Tabel med navne.
- Mulighed for at tilføje ny række med navn (knap nederst på siden)
- Sortering af rækker via drag'n'drop.
- Info popup med information om balance (skyld/tilgodehavende) samt et inputfelt til at registrere indbetaling.
- Kolonne med navn som linker til logbog.
- Tabel med log, oversigt over alle hændelser.
- Hændelseslog, registere dato og tid for hændelser på counter.
- Kolonne med visuel status på counter (pinde)
- Action knapper til at tilføje/trække fra counter (plus og minus ikoner)

##Database struktur

###Users
<table>
<tr>
	<th>table name</th>
	<th>Type</th>
</tr>
<tr>
	<td>id</td>
	<td>int (auto_increment)</td>
</tr>
<tr>
	<td>name</td>
	<td>string</td>
</tr>
<tr>
	<td>units</td>
	<td>smallint</td>
</tr>
<tr>
	<td>balance</td>
	<td>decimal (10,2)</td>
</tr>
<tr>
	<td>status (active or inactive)</td>
	<td>tinyint (values 1 or 0)</td>
</tr>
<tr>
	<td>weight</td>
	<td>tinyint</td>
</tr>
</table>

###Log
<table>
<tr>
	<th>table name</th>
	<th>Type</th>
</tr>
<tr>
	<td>id</td>
	<td>int (auto_increment)</td>
</tr>
<tr>
	<td>userid</td>
	<td>int</td>
</tr>
<tr>
	<td>datetime</td>
	<td>datetime</td>
</tr>
<tr>
	<td>action</td>
	<td>string</td>
</tr>
<tr>
	<td>prevunit</td>
	<td>int</td>
</tr>
<tr>
	<td>newunit</td>
	<td>int</td>
</tr>
<tr>
	<td>prevbalance</td>
	<td>decimal (10,2)</td>
</tr>
<tr>
	<td>newbalance</td>
	<td>decimal (10,2)</td>
</tr>
</table>