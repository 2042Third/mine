<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Unencrypted File Upload</title>
<link rel='stylesheet' href='style.css'  type="text/css" >
<title>PDM crypto</title>
</head>



<body>
<table style="width:100%">
  <tr>
    <th>File</th>
    <th>Download</th>
    
  </tr>

  <c:forEach items="${list_files}" var="file">
    <tr>
      <td>${file}</td>
      <td></td>
    </tr>
  </c:forEach>
</table>

<footer>
  <a href="https://github.com/2042third" target="_blank">Source</a>
  <br><br>
  <span id="version"></span><br>
  Copyright (c) 2021 Yang Yi<br>
  <a href="https://dryangyi.com" target="_blank">dryangyi.com</a>
</footer>



</body>
</html>