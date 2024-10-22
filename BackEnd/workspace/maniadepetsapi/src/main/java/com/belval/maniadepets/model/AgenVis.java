package com.belval.maniadepets.model;
import java.util.Objects;
import jakarta.persistence.*;
@Entity
@Table(name = "Agen_Vis")
public class AgenVis {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name = "Agen_Id")
   private Integer agenId;
   @Column(name = "Agen_Tipo")
   private String agenTipo;
   @Column(name = "agen_data_agen")
   private String agenDataAgen;
   // Relacionamento ManyToOne com InfoPet
   @ManyToOne
   @JoinColumn(name = "Pet_Id", referencedColumnName = "Pet_Id")
   private InfoPet infoPet;
   // Construtores
   public AgenVis() {}
   public AgenVis(Integer agenId, String agenTipo, String agenDataAgen, InfoPet infoPet) {
       this.agenId = agenId;
       this.agenTipo = agenTipo;
       this.agenDataAgen = agenDataAgen;
       this.infoPet = infoPet;
   }
   // Getters e Setters
   public Integer getAgenId() {
       return agenId;
   }
   public void setAgenId(Integer agenId) {
       this.agenId = agenId;
   }
   public String getAgenTipo() {
       return agenTipo;
   }
   public void setAgenTipo(String agenTipo) {
       this.agenTipo = agenTipo;
   }
   public String getAgenDataAgen() {
       return agenDataAgen;
   }
   public void setAgenDataAgen(String agenDataAgen) {
       this.agenDataAgen = agenDataAgen;
   }
   public InfoPet getInfoPet() {
       return infoPet;
   }
   public void setInfoPet(InfoPet infoPet) {
       this.infoPet = infoPet;
   }
   // Métodos hashCode, equals e toString
   @Override
   public int hashCode() {
       return Objects.hash(agenId, agenTipo, agenDataAgen, infoPet);
   }
   @Override
   public boolean equals(Object obj) {
       if (this == obj)
           return true;
       if (obj == null || getClass() != obj.getClass())
           return false;
       AgenVis other = (AgenVis) obj;
       return Objects.equals(agenId, other.agenId) && Objects.equals(agenTipo, other.agenTipo)
&& Objects.equals(agenDataAgen, other.agenDataAgen) && Objects.equals(infoPet, other.infoPet);
   }
   @Override
   public String toString() {
       return "AgenVis [agenId=" + agenId + ", agenTipo=" + agenTipo + ", agenDataAgen=" + agenDataAgen + ", infoPet=" + infoPet + "]";
   }
}
