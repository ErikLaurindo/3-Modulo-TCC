package com.belval.maniadepets.model;
 
import java.time.LocalDate;
import java.util.Objects;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
@Entity
@Table(name = "Funcionario")
public class Funcionario {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name = "Fun_Id")
   private Integer funId;
   @Column(name = "Fun_Name")
   private String funName;
   @Column(name = "Fun_Nasc")
   private String funNasc;
   @Column(name = "Fun_Genero")
   private String funGenero;
   @Column(name = "Fun_Ende")
   private String funEnde;
   @Column(name = "Fun_Num")
   private String funNum;
   @Column(name = "Fun_Email")
   private String funEmail;
   @ManyToOne
   @JoinColumn(name = "Agen_Id")
   private AgenVis agenVis;
   public Funcionario() {
       // Construtor vazio
   }
   public Funcionario(Integer funId, String funName, String funNasc, String funGenero, String funEnde, String funNum, String funEmail, AgenVis agenda) {
       this.funId = funId;
       this.funName = funName;
       this.funNasc = funNasc;
       this.funGenero = funGenero;
       this.funEnde = funEnde;
       this.funNum = funNum;
       this.funEmail = funEmail;
       this.agenVis = agenda;
   }
   // Getters e setters
   public Integer getFunId() {
       return funId;
   }
   public void setFunId(Integer funId) {
       this.funId = funId;
   }
   public String getFunName() {
       return funName;
   }
   public void setFunName(String funName) {
       this.funName = funName;
   }
   public String getFunNasc() {
       return funNasc;
   }
   public void setFunNasc(String funNasc) {
       this.funNasc = funNasc;
   }
   public String getFunGenero() {
       return funGenero;
   }
   public void setFunGenero(String funGenero) {
       this.funGenero = funGenero;
   }
   public String getFunEnde() {
       return funEnde;
   }
   public void setFunEnde(String funEnde) {
       this.funEnde = funEnde;
   }
   public String getFunNum() {
       return funNum;
   }
   public void setFunNum(String funNum) {
       this.funNum = funNum;
   }
   public String getFunEmail() {
       return funEmail;
   }
   public void setFunEmail(String funEmail) {
       this.funEmail = funEmail;
   }
   public AgenVis getAgenda() {
       return agenVis;
   }
   public void setAgenda(AgenVis agenda) {
       this.agenVis = agenda;
   }
   @Override
   public int hashCode() {
       return Objects.hash(funId, funName, funNasc, funGenero, funEnde, funNum, funEmail, agenVis);
   }
   @Override
   public boolean equals(Object obj) {
       if (this == obj)
           return true;
       if (obj == null || getClass() != obj.getClass())
           return false;
       Funcionario other = (Funcionario) obj;
       return Objects.equals(funId, other.funId) && Objects.equals(funName, other.funName)
&& Objects.equals(funNasc, other.funNasc) && Objects.equals(funGenero, other.funGenero)
&& Objects.equals(funEnde, other.funEnde) && Objects.equals(funNum, other.funNum)
&& Objects.equals(funEmail, other.funEmail) && Objects.equals(agenVis, other.agenVis);
   }
   @Override
   public String toString() {
       return "Funcionario [funId=" + funId + ", funName=" + funName + ", funNasc=" + funNasc + ", funGenero="
               + funGenero + ", funEnde=" + funEnde + ", funNum=" + funNum + ", funEmail=" + funEmail + ", agenda=" + agenVis + "]";
   }
}