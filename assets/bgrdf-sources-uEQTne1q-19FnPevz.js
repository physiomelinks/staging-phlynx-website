var e=`@prefix bg: <https://bg-rdf.org/ontologies/bondgraph#> .
@prefix bgf: <https://bg-rdf.org/ontologies/bondgraph-framework#> .
@prefix bpc: <https://bg-rdf.org/ontologies/block-port-connector#> .
@prefix cdt: <https://w3id.org/cdt/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

@base <https://bg-rdf.org/ontologies/bondgraph-framework> .

<https://bg-rdf.org/ontologies/bondgraph-framework>
    a owl:Ontology ;
    owl:versionInfo "2026-04-12" ;
    owl:versionIRI <https://bg-rdf.org/ontologies/versioned/bondgraph-framework/2026-04-12-ontology.ttl> ;
    owl:priorVersion
        <https://bg-rdf.org/ontologies/versioned/bondgraph-framework/2026-01-21-ontology.html> ,
        <https://bg-rdf.org/ontologies/versioned/bondgraph-framework/2026-01-21-ontology.ttl> ;
    dcterms:title "A Framework for Bond-Graph Modelling" .

#################################################################
#    Classes
#################################################################

bgf:PhysicalDomain
    a owl:Class ;
    dcterms:description "A physical domain in which energy is carried by some quantity." .

bgf:Flow
    a owl:Class ;
    dcterms:description "The rate of change of a physical domain's quantity; the energy gradient with respect to momentum in a physical domain." .

bgf:Potential
    a owl:Class ;
    dcterms:description "The rate of change of a physical domain's momentum; the energy gradient with respect to quantity in a physical domain." .

bgf:Effort
    a owl:Class ;
    owl:equivalentClass bgf:Potential ;
    dcterms:description "And alternative name for the energy gradient with respect to quantity in a physical domain." .

bgf:Momentum
    a owl:Class ;
    dcterms:description "A carrier of potential energy in a physical domain." .

bgf:Quantity
    a owl:Class ;
    dcterms:description "A carrier of flow energy in a physical domain." .

#################################################################
#################################################################

bgf:BondgraphModel
    a owl:Class ;
    rdfs:subClassOf bg:BondGraph .

bgf:BondElement
    a owl:Class ;
    rdfs:subClassOf bg:BondElement .

bgf:JunctionStructure
    a owl:Class ;
    rdfs:subClassOf bg:JunctionStructure .

bgf:PowerBond
    a owl:Class ;
    dcterms:description "A connection between two PowerPorts over which power is transfered." ;
    rdfs:subClassOf bg:PowerBond .

bgf:PowerPort
    a owl:Class ;
    dcterms:description "A port of a BondElement or JunctionStructure through which power is transfered." ;
    rdfs:subClassOf bg:PowerPort .

bgf:SignalBond
    a owl:Class ;
    dcterms:description "A connection in which no power flows, used to convey state information." .

#################################################################

bgf:CompositeElement
    a owl:Class ;
    dcterms:description "A composite of a bgf:BondElement and a bgf:JunctionStructure, for example a bgf:bgf:ZeroStorageNode." .

#################################################################
#################################################################

bgf:QuantityStore
    a owl:Class ;
    rdfs:subClassOf bgf:BondElement ;
    rdfs:label "Static energy store" ;
    dcterms:description "An element which stores static energy as the amount of some quantity." .

bgf:FlowStore
    a owl:Class ;
    rdfs:subClassOf bgf:BondElement ;
    rdfs:label "Dynamic energy store" ;
    dcterms:description "An element which stores dynamic energy as the amount of some momentum." .

bgf:Dissipator
    a owl:Class ;
    rdfs:subClassOf bgf:BondElement ;
    rdfs:label "Dissipative element" ;
    dcterms:description "An element which dissipates energy." .

bgf:PotentialSource
    a owl:Class ;
    rdfs:subClassOf bgf:BondElement ;
    rdfs:label "Potential source" ;
    dcterms:description "A source of potential energy." .

bgf:FlowSource
    a owl:Class ;
    rdfs:subClassOf bgf:BondElement ;
    rdfs:label "Flow source" ;
    dcterms:description "A source of dynamic energy." .

#################################################################

bgf:Reaction
    a owl:Class ;
    rdfs:subClassOf bgf:Dissipator ;
    rdfs:label "Reaction element" ;
    dcterms:description "A dissipator with two power ports through which quantities are exchanged." .

bgf:Resistance
    a owl:Class ;
    rdfs:subClassOf bgf:Dissipator ;
    rdfs:label "Resistive element" ;
    dcterms:description "A dissipator with a single power port." .

#################################################################

bgf:OneNode
    a owl:Class ;
    rdfs:subClassOf bgf:JunctionStructure ;
    rdfs:label "One node" ;
    dcterms:description "Total potential at node is zero." .

bgf:TransformNode
    a owl:Class ;
    rdfs:subClassOf bgf:JunctionStructure ;
    rdfs:label "Transform node" ;
    dcterms:description "Transform potential and flow." .

bgf:TransformerNode
    a owl:Class ;
    rdfs:subClassOf bgf:TransformNode ;
    rdfs:label "Transformer node" ;
    dcterms:description "A transformer, also between physical domains: the potential on its outward port is its ratio times the potential on its inward port, and the inward flow its ratio times the outward flow (e.g. a membrane potential coupled to a reaction that moves charge, with ratio z F)." .

bgf:GyratorNode
    a owl:Class ;
    rdfs:subClassOf bgf:TransformNode ;
    rdfs:label "Gyrator node" ;
    dcterms:description "A gyrator, also within a physical domain: the potential on each port is its ratio times the flow on the other (e.g. a voice coil, force = B l current)." .

bgf:ZeroNode
    a owl:Class ;
    rdfs:subClassOf bgf:JunctionStructure ;
    rdfs:label "Zero node" ;
    dcterms:description "Total flow at node is zero." .

#################################################################
#################################################################

bgf:OneStorageNode
    a owl:Class, bgf:CompositeElement ;
    rdfs:subClassOf bgf:FlowStore ;
    rdfs:subClassOf bgf:OneNode ;
    rdfs:label "One flow store node" ;
    dcterms:description "A flow store element with one associated One Nodes" .

bgf:OneReactionNode
    a owl:Class, bgf:CompositeElement ;
    rdfs:subClassOf bgf:Reaction ;
    rdfs:subClassOf bgf:OneNode ;
    rdfs:label "One reaction node" ;
    dcterms:description "A dissipator with two associated One Nodes" .

bgf:OneResistanceNode
    a owl:Class, bgf:CompositeElement ;
    rdfs:subClassOf bgf:Resistance ;
    rdfs:subClassOf bgf:OneNode ;
    rdfs:label "One resistance node" ;
    dcterms:description "A dissipator with one associated One Node" .

bgf:ZeroStorageNode
    a owl:Class, bgf:CompositeElement ;
    rdfs:subClassOf bgf:QuantityStore ;
    rdfs:subClassOf bgf:ZeroNode ;
    rdfs:label "Zero storage node" ;
    dcterms:description "A storage element with one associated Zero Node" .

#################################################################
#################################################################

bgf:ElementTemplate
    a owl:Class .

bgf:CompositeTemplate
    a owl:Class .

bgf:Constant
    a owl:Class .

bgf:Value
    a owl:Class .

bgf:Variable
    a owl:Class .

#################################################################
#    Port directions
#################################################################

bgf:InwardPort
    a owl:Class .

bgf:OutwardPort
    a owl:Class .

#################################################################
#    Datatypes
#################################################################

bgf:latex
    a rdfs:Datatype ;
    rdfs:subClassOf xsd:string .

bgf:mathml
    a rdfs:Datatype ;
    rdfs:subClassOf rdf:XMLLiteral .

#################################################################
#    Data properties
#################################################################

bgf:usesTemplate
    a owl:DatatypeProperty ;
    rdfs:domain bgf:BondgraphModel .

bgf:hasBlock
    a owl:DatatypeProperty ;
    rdfs:domain bgf:BondgraphModel ;
    rdfs:range xsd:string .

#################################################################

bgf:bondCount
    a owl:DatatypeProperty, owl:FunctionalProperty ;
    dcterms:description "The number of bonds represented in a connection between two Power Ports." ;
    rdfs:range xsd:positiveInteger .

bgf:constitutiveRelation
    a owl:DatatypeProperty, owl:FunctionalProperty ;
    rdfs:domain bgf:ElementTemplate ;
    rdfs:range bgf:mathml .

bgf:hasDomain
    a owl:DatatypeProperty, owl:FunctionalProperty ;
    rdfs:domain bgf:PowerPort ;
    rdfs:range bgf:PhysicalDomain .

bgf:portId
    a owl:DatatypeProperty ;
    dcterms:description "The identity of each port when a Bond Element or Junction Structure has more than a single Power Port." ;
    rdfs:range xsd:Name .

bgf:hasSymbol
    a owl:DatatypeProperty, owl:FunctionalProperty ;
    rdfs:domain bgf:Value ;
    rdfs:range xsd:Name .

bgf:hasUnits
    a owl:DatatypeProperty, owl:FunctionalProperty ;
    rdfs:domain bgf:Variable ;
    rdfs:range cdt:ucumunit .

bgf:hasValue
    a owl:DatatypeProperty, owl:FunctionalProperty ;
    rdfs:range cdt:ucum .

bgf:varName
    a owl:DatatypeProperty, owl:FunctionalProperty ;
    dcterms:description "A name to identify a variable, for both when it is declared and when it is given a value." ;
    rdfs:range xsd:Name .

#################################################################
#    Names of a model's variables in generated code
#################################################################

bgf:NamingRule
    a owl:Class ;
    dcterms:description """How the variables of a model's elements are named in generated code (e.g. CellML), in place of
the bond graph's names (q_G6P_c, u_q_G6P_c, v_Re_HK_c). A rule names one variable (bgf:forVariable, the template's
name for it: q, u, v, u_f, K, kappa, ...) of the elements of one class (bgf:forElementClass, e.g. bgf:QuantityStore;
all classes when absent) in one physical domain (bgf:forDomain, e.g. bgf:Chemical; all domains when absent) by a
pattern (bgf:namePattern) with placeholders {species}, {location}, {name} (the
species, else the element's identifier), {element} (the bond graph's name for the element, e.g. q_G6P_c), {label}
(its symbol, e.g. q) and {var}. Characters a name can't hold become _, repeated or surrounding _ are dropped, a name
starting with a digit is prefixed with {var}_, and a name already taken gets _2, _3, ... Of the rules for a variable,
the one naming the element's class and domain wins, then its class, then its domain, then neither.""" .

bgf:hasNamingRule
    a owl:ObjectProperty ;
    dcterms:description "A naming rule for the model's variables." ;
    rdfs:domain bgf:BondgraphModel ;
    rdfs:range bgf:NamingRule .

bgf:forElementClass
    a owl:ObjectProperty, owl:FunctionalProperty ;
    dcterms:description "The class of elements a naming rule applies to: a direct subclass of bgf:BondElement (e.g. bgf:QuantityStore, bgf:Reaction, bgf:PotentialSource)." ;
    rdfs:range owl:Class .

bgf:forDomain
    a owl:ObjectProperty, owl:FunctionalProperty ;
    dcterms:description "The physical domain of the elements a naming rule applies to (e.g. bgf:Chemical, bgf:Hydraulic)." ;
    rdfs:domain bgf:NamingRule ;
    rdfs:range bgf:PhysicalDomain .

bgf:forVariable
    a owl:DatatypeProperty, owl:FunctionalProperty ;
    dcterms:description "The variable a naming rule or variable name is for, by its template name (q, u, v, u_f, K, kappa, ...)." ;
    rdfs:range xsd:string .

bgf:namePattern
    a owl:DatatypeProperty, owl:FunctionalProperty ;
    dcterms:description "A naming rule's pattern, e.g. \\"mu_{species}_{location}\\"." ;
    rdfs:domain bgf:NamingRule ;
    rdfs:range xsd:string .

bgf:VariableName
    a owl:Class ;
    dcterms:description "One element variable's name in generated code, given explicitly (it wins over any naming rule)." .

bgf:hasVariableName
    a owl:ObjectProperty ;
    rdfs:domain bgf:BondElement ;
    rdfs:range bgf:VariableName .

bgf:cellmlName
    a owl:DatatypeProperty, owl:FunctionalProperty ;
    dcterms:description "The name a variable is given in generated code." ;
    rdfs:domain bgf:VariableName ;
    rdfs:range xsd:string .

#################################################################
#    Presentation of an Element Template
#################################################################

bgf:ElementStyle
    a owl:Class ;
    dcterms:description "How a diagram draws the elements of an Element Template, so that elements with different constitutive relations look different." .

bgf:hasStyle
    a owl:ObjectProperty, owl:FunctionalProperty ;
    rdfs:domain bgf:ElementTemplate ;
    rdfs:range bgf:ElementStyle .

bgf:lawLabel
    a owl:DatatypeProperty, owl:FunctionalProperty ;
    dcterms:description "A short tag naming an Element Template's constitutive relation (e.g. \\"sat\\" for a saturating reaction), drawn with the element's symbol." ;
    rdfs:domain bgf:ElementTemplate ;
    rdfs:range xsd:string .

bgf:textColour
    a owl:DatatypeProperty, owl:FunctionalProperty ;
    dcterms:description "A CSS colour for the element's symbol." ;
    rdfs:domain bgf:ElementStyle ;
    rdfs:range xsd:string .

bgf:backgroundColour
    a owl:DatatypeProperty, owl:FunctionalProperty ;
    dcterms:description "A CSS colour for the element's background." ;
    rdfs:domain bgf:ElementStyle ;
    rdfs:range xsd:string .

bgf:borderColour
    a owl:DatatypeProperty, owl:FunctionalProperty ;
    dcterms:description "A CSS colour for the element's border." ;
    rdfs:domain bgf:ElementStyle ;
    rdfs:range xsd:string .

bgf:borderStyle
    a owl:DatatypeProperty, owl:FunctionalProperty ;
    dcterms:description "The element's border: \\"solid\\" (the default), \\"dashed\\" or \\"double\\"." ;
    rdfs:domain bgf:ElementStyle ;
    rdfs:range xsd:string .

#################################################################
#    Object Properties
#################################################################

bgf:hasBondElement
    a owl:ObjectProperty ;
    rdfs:domain bgf:BondgraphModel ;
    rdfs:range bgf:BondElement .

bgf:hasJunctionStructure
    a owl:ObjectProperty ;
    rdfs:domain bgf:BondgraphModel ;
    rdfs:range bgf:JunctionStructure .

bgf:hasPowerBond
    a owl:ObjectProperty ;
    rdfs:domain bgf:BondgraphModel ;
    rdfs:range bgf:PowerBond .

bgf:hasSignalBond
    a owl:ObjectProperty ;
    rdfs:domain bgf:BondgraphModel ;
    rdfs:range bgf:SignalBond .

#################################################################

bgf:direction
    a owl:ObjectProperty, owl:FunctionalProperty ;
    dcterms:description "The inward or outward direction of a power port of a multi-port Bond Element." .

bgf:hasConstant
    a owl:ObjectProperty, owl:FunctionalProperty ;
    rdfs:domain bgf:PhysicalDomain ;
    rdfs:range bgf:Variable .

bgf:hasPort
    a owl:ObjectProperty, owl:FunctionalProperty ;
    rdfs:domain bgf:ElementTemplate .

bgf:hasParameter
    a owl:ObjectProperty, owl:FunctionalProperty ;
    dcterms:description "A parameter for the constitutive relation of a Bond Element." ;
    rdfs:domain bgf:ElementTemplate ;
    rdfs:range bgf:Variable .

bgf:hasVariable
    a owl:ObjectProperty, owl:FunctionalProperty ;
    dcterms:description "A non-parameter variable in the constitutive relation of a Bond Element that could be assigned a value." ;
    rdfs:domain bgf:ElementTemplate ;
    rdfs:range bgf:Variable .

#################################################################

bgf:parameterValue
    a owl:ObjectProperty, owl:FunctionalProperty ;
    dcterms:description "A value to assign to a parameter of a bond element" ;
    rdfs:domain bgf:BondElement ;
    rdfs:range bgf:Value .

bgf:variableValue
    a owl:ObjectProperty, owl:FunctionalProperty ;
    dcterms:description "A value to assign to a non-parameter variable in the constitutive relation of a bond element." ;
    rdfs:domain bgf:BondElement ;
    rdfs:range bgf:Value .

#################################################################

bgf:hasSource
    a owl:ObjectProperty, owl:FunctionalProperty ;
    rdfs:domain bgf:PowerBond ;
    rdfs:range bgf:PowerPort .

bgf:hasTarget
    a owl:ObjectProperty, owl:FunctionalProperty ;
    rdfs:domain bgf:PowerBond ;
    rdfs:range bgf:PowerPort .

#################################################################

bgf:hasPotential
    a owl:ObjectProperty, owl:FunctionalProperty ;
    rdfs:domain bgf:PhysicalDomain ;
    rdfs:range bgf:Variable .

bgf:hasFlow
    a owl:ObjectProperty, owl:FunctionalProperty ;
    rdfs:domain bgf:PhysicalDomain ;
    rdfs:range bgf:Variable .

bgf:hasQuantity
    a owl:ObjectProperty, owl:FunctionalProperty ;
    rdfs:domain bgf:PhysicalDomain ;
    rdfs:range bgf:Variable .

#################################################################
#    Annotation Properties
#################################################################

bgf:hasLocation
    a owl:ObjectProperty ;
    dcterms:description "The location of an element or junction in the physical system described by the bond graph." .

bgf:hasPhysics
    a owl:ObjectProperty ;
    dcterms:description "A real world physical continuant, occurrent, or property that can be observed and analyzed by the methods of classical physics." .

bgf:hasSpecies
    a owl:ObjectProperty ;
    dcterms:description "The entity which an element or junction represents in the physical system described by the bond graph." .

#################################################################
#################################################################

bgf:elementTemplate
    a owl:ObjectProperty, owl:FunctionalProperty ;
    rdfs:domain bgf:CompositeTemplate ;
    rdfs:range bgf:ElementTemplate .

bgf:junctionStructure
    a owl:ObjectProperty, owl:FunctionalProperty ;
    rdfs:domain bgf:CompositeTemplate ;
    rdfs:range bgf:JunctionStructure .

#################################################################
#################################################################
`,t=`@prefix bgf: <https://bg-rdf.org/ontologies/bondgraph-framework#> .
@prefix cdt: <https://w3id.org/cdt/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

#===============================================================================

bgf:Chemical
    a bgf:PhysicalDomain ;
    bgf:hasConstant [
        bgf:varName "RT" ;
        bgf:hasValue "2578.73058 J/mol"^^cdt:ucum
    ], [
        bgf:varName "F" ;
        rdfs:label "Faraday's constant" ;
        bgf:hasValue "0.96485e5 C/mol"^^cdt:ucum
    ] ;
    bgf:hasFlow [
        bgf:varName "v" ;
        bgf:hasUnits "mol/s"^^cdt:ucumunit
    ] ;
    bgf:hasPotential [
        bgf:varName "u" ;
        bgf:hasUnits "J/mol"^^cdt:ucumunit
    ] ;
    bgf:hasQuantity [
        bgf:varName "q" ;
        rdfs:label "Chemical quantity (mol)" ;
        bgf:hasUnits "mol"^^cdt:ucumunit
    ] .


#===============================================================================

bgf:ChemicalPotential
    a bgf:ElementTemplate ;
    rdfs:subClassOf bgf:PotentialSource ;
    bgf:hasDomain bgf:Chemical .

bgf:ChemicalFlow
    a bgf:ElementTemplate ;
    rdfs:subClassOf bgf:FlowSource ;
    bgf:hasDomain bgf:Chemical .

#===============================================================================

bgf:ChemicalReaction
    a bgf:ElementTemplate ;
    rdfs:subClassOf bgf:Reaction ;
    bgf:hasDomain bgf:Chemical ;
    rdfs:label "Chemical reaction" ;
    bgf:hasPort [
        bgf:portId 'f' ;
        bgf:direction bgf:InwardPort
    ], [
        bgf:portId 'r' ;
        bgf:direction bgf:OutwardPort
    ] ;
    bgf:hasParameter [
        bgf:varName "kappa" ;
        bgf:hasUnits "mol/s"^^cdt:ucumunit
    ] ;
    # v = kappa*(exp(u_f/RT) - exp(u_r/RT))
    bgf:constitutiveRelation """
        <math xmlns="http://www.w3.org/1998/Math/MathML">
            <apply>
                <eq/>
                <ci>v</ci>
                <apply>
                    <times/>
                    <ci>kappa</ci>
                    <apply>
                        <minus/>
                        <apply>
                            <exp/>
                            <apply>
                                <divide/>
                                <ci>u_f</ci>
                                <ci>RT</ci>
                            </apply>
                        </apply>
                        <apply>
                            <exp/>
                            <apply>
                                <divide/>
                                <ci>u_r</ci>
                                <ci>RT</ci>
                            </apply>
                        </apply>
                    </apply>
                </apply>
            </apply>
        </math>
    """^^bgf:mathml .

#===============================================================================

bgf:ChemicalConcentration
    a bgf:ElementTemplate ;
    rdfs:subClassOf bgf:QuantityStore ;
    bgf:hasDomain bgf:Chemical ;
    rdfs:label "Chemical concentration" ;
    bgf:hasParameter [
        bgf:varName "K" ;
        bgf:hasUnits "mol-1"^^cdt:ucumunit
    ] ;
    # ode(q, t) = v
    # u = RT*ln(K*q);
    bgf:constitutiveRelation """
        <math xmlns="http://www.w3.org/1998/Math/MathML">
            <apply>
                <eq/>
                <apply>
                    <diff/>
                    <bvar>
                        <ci>t</ci>
                    </bvar>
                    <ci>q</ci>
                </apply>
                <ci>v</ci>
            </apply>
            <apply>
                <eq/>
                <ci>u</ci>
                <apply>
                    <times/>
                    <ci>RT</ci>
                    <apply>
                        <ln/>
                        <apply>
                            <times/>
                            <ci>K</ci>
                            <ci>q</ci>
                        </apply>
                    </apply>
                </apply>
            </apply>
        </math>
    """^^bgf:mathml .

#===============================================================================

bgf:SaturatingChemicalReaction
    a bgf:ElementTemplate ;
    rdfs:subClassOf bgf:Reaction ;
    bgf:hasDomain bgf:Chemical ;
    rdfs:label "Saturating chemical reaction" ;
    bgf:lawLabel "sat" ;
    bgf:hasStyle [
        a bgf:ElementStyle ;
        bgf:textColour "#72329F" ;
        bgf:backgroundColour "#FFE9A8" ;
        bgf:borderColour "#C55A11" ;
        bgf:borderStyle "dashed"
    ] ;
    bgf:hasPort [
        bgf:portId 'f' ;
        bgf:direction bgf:InwardPort
    ], [
        bgf:portId 'r' ;
        bgf:direction bgf:OutwardPort
    ] ;
    bgf:hasParameter [
        bgf:varName "kappa" ;
        bgf:hasUnits "mol/s"^^cdt:ucumunit
    ], [
        bgf:varName "sigma" ;
        rdfs:label "Saturation (half-saturated where exp(u_f/RT) + exp(u_r/RT) = sigma)" ;
        bgf:hasUnits "1"^^cdt:ucumunit
    ] ;
    # v = kappa*(exp(u_f/RT) - exp(u_r/RT))/(1 + (exp(u_f/RT) + exp(u_r/RT))/sigma)
    # The mass-action reaction slowed as its substrates or products build up; its equilibrium is unchanged, and it
    # tends to the Chemical reaction as sigma grows.
    bgf:constitutiveRelation """
        <math xmlns="http://www.w3.org/1998/Math/MathML">
            <apply>
                <eq/>
                <ci>v</ci>
                <apply>
                    <divide/>
                    <apply>
                        <times/>
                        <ci>kappa</ci>
                        <apply>
                            <minus/>
                            <apply>
                                <exp/>
                                <apply><divide/><ci>u_f</ci><ci>RT</ci></apply>
                            </apply>
                            <apply>
                                <exp/>
                                <apply><divide/><ci>u_r</ci><ci>RT</ci></apply>
                            </apply>
                        </apply>
                    </apply>
                    <apply>
                        <plus/>
                        <cn>1</cn>
                        <apply>
                            <divide/>
                            <apply>
                                <plus/>
                                <apply>
                                    <exp/>
                                    <apply><divide/><ci>u_f</ci><ci>RT</ci></apply>
                                </apply>
                                <apply>
                                    <exp/>
                                    <apply><divide/><ci>u_r</ci><ci>RT</ci></apply>
                                </apply>
                            </apply>
                            <ci>sigma</ci>
                        </apply>
                    </apply>
                </apply>
            </apply>
        </math>
    """^^bgf:mathml .

#===============================================================================

bgf:SaturatingChemicalConcentration
    a bgf:ElementTemplate ;
    rdfs:subClassOf bgf:QuantityStore ;
    bgf:hasDomain bgf:Chemical ;
    rdfs:label "Chemical concentration with saturating activity" ;
    bgf:lawLabel "sat" ;
    bgf:hasStyle [
        a bgf:ElementStyle ;
        bgf:textColour "#00B050" ;
        bgf:backgroundColour "#D6EAF8" ;
        bgf:borderColour "#2E75B6" ;
        bgf:borderStyle "dashed"
    ] ;
    bgf:hasParameter [
        bgf:varName "K" ;
        bgf:hasUnits "mol-1"^^cdt:ucumunit
    ], [
        bgf:varName "k_sat" ;
        rdfs:label "Amount at which the activity is half its ideal value" ;
        bgf:hasUnits "mol"^^cdt:ucumunit
    ] ;
    # ode(q, t) = v
    # u = RT*ln(K*q*k_sat/(k_sat + q))
    # A store whose activity saturates (a polymer's chain ends, binding sites): ideal while q << k_sat.
    bgf:constitutiveRelation """
        <math xmlns="http://www.w3.org/1998/Math/MathML">
            <apply>
                <eq/>
                <apply>
                    <diff/>
                    <bvar>
                        <ci>t</ci>
                    </bvar>
                    <ci>q</ci>
                </apply>
                <ci>v</ci>
            </apply>
            <apply>
                <eq/>
                <ci>u</ci>
                <apply>
                    <times/>
                    <ci>RT</ci>
                    <apply>
                        <ln/>
                        <apply>
                            <divide/>
                            <apply>
                                <times/>
                                <ci>K</ci>
                                <ci>q</ci>
                                <ci>k_sat</ci>
                            </apply>
                            <apply>
                                <plus/>
                                <ci>k_sat</ci>
                                <ci>q</ci>
                            </apply>
                        </apply>
                    </apply>
                </apply>
            </apply>
        </math>
    """^^bgf:mathml .

#===============================================================================

bgf:NKETransporter
    a bgf:ElementTemplate ;
    rdfs:subClassOf bgf:Reaction ;
    bgf:hasDomain bgf:Chemical ;
    bgf:hasSymbol "NKE" ;
    bgf:hasPort [
        bgf:portId 'K_f' ;
        bgf:direction bgf:InwardPort ;
        bgf:bondCount 2
    ], [
        bgf:portId 'K_r' ;
        bgf:direction bgf:OutwardPort ;
        bgf:bondCount 2
    ], [
        bgf:portId 'Na_f' ;
        bgf:direction bgf:InwardPort ;
        bgf:bondCount 3
    ], [
        bgf:portId 'Na_r' ;
        bgf:direction bgf:OutwardPort ;
        bgf:bondCount 3
    ] ;
    bgf:hasParameter [
        bgf:varName "k_NKE" ;
        bgf:hasUnits "mol/s"^^cdt:ucumunit
    ], [
        bgf:varName "K_K";
        bgf:hasUnits "L/mol"^^cdt:ucumunit
    ], [
        bgf:varName "K_Na" ;
        bgf:hasUnits "L/mol"^^cdt:ucumunit
    ], [
        bgf:varName "u_e";
        bgf:hasUnits "J/C"^^cdt:ucumunit
    ] ;
    bgf:hasVariable [
        bgf:varName "q_H2O_in" ;
        bgf:hasUnits "L"^^cdt:ucumunit
    ], [
        bgf:varName "q_H2O_out" ;
        bgf:hasUnits "L"^^cdt:ucumunit
    ], [
        bgf:varName "q_Na_in" ;
        bgf:hasUnits "mol"^^cdt:ucumunit
    ], [
        bgf:varName "q_Na_out" ;
        bgf:hasUnits "mol"^^cdt:ucumunit
    ], [
        bgf:varName "q_K_in" ;
        bgf:hasUnits "mol"^^cdt:ucumunit
    ], [
        bgf:varName "q_K_out" ;
        bgf:hasUnits "mol"^^cdt:ucumunit
    ] ;
    bgf:constitutiveRelation """
        <math xmlns="http://www.w3.org/1998/Math/MathML">
            <apply>
                <eq/>
                <ci>v</ci>
                <apply>
                    <divide/>
                    <apply>
                        <times/>
                        <ci>k_NKE</ci>
                        <cn>3</cn>
                        <apply>
                            <minus/>
                            <apply>
                                <times/>
                                <apply>
                                    <power/>
                                    <apply>
                                        <divide/>
                                        <apply>
                                            <times/>
                                            <ci>K_Na</ci>
                                            <ci>q_Na_in</ci>
                                        </apply>
                                        <ci>q_H2O_in</ci>
                                    </apply>
                                    <cn>3</cn>
                                </apply>
                                <apply>
                                    <power/>
                                    <apply>
                                        <divide/>
                                        <apply>
                                            <times/>
                                            <ci>K_K</ci>
                                            <ci>q_K_out</ci>
                                        </apply>
                                        <ci>q_H2O_out</ci>
                                    </apply>
                                    <cn>2</cn>
                                </apply>
                            </apply>
                            <apply>
                                <times/>
                                <apply>
                                    <power/>
                                    <apply>
                                        <divide/>
                                        <apply>
                                            <times/>
                                            <ci>K_Na</ci>
                                            <ci>q_Na_out</ci>
                                        </apply>
                                        <ci>q_H2O_out</ci>
                                    </apply>
                                    <cn>3</cn>
                                </apply>
                                <apply>
                                    <power/>
                                    <apply>
                                        <divide/>
                                        <apply>
                                            <times/>
                                            <ci>K_K</ci>
                                            <ci>q_K_in</ci>
                                        </apply>
                                        <ci>q_H2O_in</ci>
                                    </apply>
                                    <cn>2</cn>
                                </apply>
                                <apply>
                                    <exp/>
                                    <apply>
                                        <divide/>
                                        <apply>
                                            <times/>
                                            <cn>2</cn>
                                            <ci>F</ci>
                                            <ci>u_e</ci>
                                        </apply>
                                        <ci>RT</ci>
                                    </apply>
                                </apply>
                            </apply>
                        </apply>
                    </apply>
                    <apply>
                        <times/>
                        <apply>
                            <plus/>
                            <cn>1</cn>
                            <apply>
                                <power/>
                                <apply>
                                    <divide/>
                                    <apply>
                                        <times/>
                                        <ci>K_Na</ci>
                                        <ci>q_Na_in</ci>
                                    </apply>
                                    <ci>q_H2O_in</ci>
                                </apply>
                                <cn>3</cn>
                            </apply>
                        </apply>
                        <apply>
                            <plus/>
                            <cn>1</cn>
                            <apply>
                                <power/>
                                <apply>
                                    <divide/>
                                    <apply>
                                        <times/>
                                        <ci>K_Na</ci>
                                        <ci>q_Na_out</ci>
                                    </apply>
                                    <ci>q_H2O_out</ci>
                                </apply>
                                <cn>3</cn>
                            </apply>
                        </apply>
                        <apply>
                            <plus/>
                            <cn>1</cn>
                            <apply>
                                <power/>
                                <apply>
                                    <divide/>
                                    <apply>
                                        <times/>
                                        <ci>K_K</ci>
                                        <ci>q_K_out</ci>
                                    </apply>
                                    <ci>q_H2O_out</ci>
                                </apply>
                                <cn>2</cn>
                            </apply>
                        </apply>
                        <apply>
                            <plus/>
                            <cn>1</cn>
                            <apply>
                                <power/>
                                <apply>
                                    <divide/>
                                    <apply>
                                        <times/>
                                        <ci>K_K</ci>
                                        <ci>q_K_in</ci>
                                    </apply>
                                    <ci>q_H2O_in</ci>
                                </apply>
                                <cn>2</cn>
                            </apply>
                        </apply>
                    </apply>
                </apply>
            </apply>
        </math>
    """^^bgf:mathml .

#===============================================================================

bgf:ChemicalStorageNode
    a bgf:CompositeTemplate ;
    rdfs:label "Chemical storage with Zero Node" ;
    rdfs:subClassOf bgf:ChemicalConcentration ;
    rdfs:subClassOf bgf:ZeroStorageNode .

#===============================================================================

bgf:ChemicalReactionNode
    a bgf:CompositeTemplate ;
    rdfs:label "Chemical reaction with One Node" ;
    rdfs:subClassOf bgf:ChemicalReaction ;
    rdfs:subClassOf bgf:OneReactionNode .

#===============================================================================

bgf:SaturatingChemicalStorageNode
    a bgf:CompositeTemplate ;
    rdfs:label "Chemical storage with saturating activity and Zero Node" ;
    rdfs:subClassOf bgf:SaturatingChemicalConcentration ;
    rdfs:subClassOf bgf:ZeroStorageNode .

bgf:SaturatingChemicalReactionNode
    a bgf:CompositeTemplate ;
    rdfs:label "Saturating chemical reaction with One Node" ;
    rdfs:subClassOf bgf:SaturatingChemicalReaction ;
    rdfs:subClassOf bgf:OneReactionNode .

#===============================================================================

bgf:NKETransporterNode
    a bgf:CompositeTemplate ;
    rdfs:label "NKE transporter with One Node" ;
    rdfs:subClassOf bgf:NKETransporter ;
    rdfs:subClassOf bgf:OneReactionNode .

#===============================================================================
#===============================================================================
`,n=`@prefix bgf: <https://bg-rdf.org/ontologies/bondgraph-framework#> .
@prefix cdt: <https://w3id.org/cdt/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

#===============================================================================

# Physical System level

#===============================================================================

bgf:Electrical
    a bgf:PhysicalDomain ;
    bgf:hasFlow [
        bgf:varName "v" ;
        rdfs:label "Electrical flow (current)" ;
        bgf:hasUnits "C/s"^^cdt:ucumunit
    ] ;
    bgf:hasPotential [
        bgf:varName "u" ;
        rdfs:label "Electrical potential (voltage)" ;
        bgf:hasUnits "J/C"^^cdt:ucumunit
    ] ;
    bgf:hasQuantity [
        bgf:varName "q" ;
        rdfs:label "Electrical charge" ;
        bgf:hasUnits "C"^^cdt:ucumunit
    ] .

#===============================================================================

bgf:VoltageSource
    a bgf:ElementTemplate ;
    rdfs:subClassOf bgf:PotentialSource ;
    bgf:hasDomain bgf:Electrical .

bgf:CurrentSource
    a bgf:ElementTemplate ;
    rdfs:subClassOf bgf:FlowSource ;
    bgf:hasDomain bgf:Electrical .

#===============================================================================

bgf:ElectricalResistor
    a bgf:ElementTemplate ;
    rdfs:subClassOf bgf:Resistance ;
    bgf:hasDomain bgf:Electrical ;
    rdfs:label "Electrical resistor" ;
    bgf:hasParameter [
        bgf:varName "R" ;
        bgf:hasUnits "J.s.C-2"^^cdt:ucumunit
    ] ;
    # v = u/R
    bgf:constitutiveRelation """
        <math xmlns="http://www.w3.org/1998/Math/MathML">
            <apply>
                <eq/>
                <ci>v</ci>
                <apply>
                    <divide/>
                    <ci>u</ci>
                    <ci>R</ci>
                </apply>
            </apply>
        </math>
    """^^bgf:mathml .

#===============================================================================

bgf:ElectricalCapacitor
    a bgf:ElementTemplate ;
    rdfs:subClassOf bgf:QuantityStore ;
    bgf:hasDomain bgf:Electrical ;
    rdfs:label "Electrical capacitor" ;
    bgf:hasParameter [
        bgf:varName "C" ;
        bgf:hasUnits "C2/J"^^cdt:ucumunit
    ] ;
    # dq/dt = v
    # u = q/C
    bgf:constitutiveRelation """
        <math xmlns="http://www.w3.org/1998/Math/MathML">
            <apply>
                <eq/>
                <apply>
                    <diff/>
                    <bvar>
                        <ci>t</ci>
                    </bvar>
                    <ci>q</ci>
                </apply>
                <ci>v</ci>
            </apply>
            <apply>
                <eq/>
                <ci>u</ci>
                <apply>
                    <divide/>
                    <ci>q</ci>
                    <ci>C</ci>
                </apply>
            </apply>
        </math>
    """^^bgf:mathml .

#===============================================================================

bgf:ElectricalInductor
    a bgf:ElementTemplate ;
    rdfs:subClassOf bgf:FlowStore ;
    bgf:hasDomain bgf:Electrical ;
    rdfs:label "Electrical inductor" ;
    bgf:hasParameter [
        bgf:varName "L" ;
        bgf:hasUnits "J.s2.C-2"^^cdt:ucumunit
    ] ;
    # dv/dt = u/L
    bgf:constitutiveRelation """
        <math xmlns="http://www.w3.org/1998/Math/MathML">
            <apply>
                <eq/>
                <apply>
                    <diff/>
                    <bvar>
                        <ci>t</ci>
                    </bvar>
                    <ci>v</ci>
                </apply>
                <apply>
                    <divide/>
                    <ci>u</ci>
                    <ci>L</ci>
                </apply>
            </apply>
        </math>
    """^^bgf:mathml .

#===============================================================================
#===============================================================================

bgf:ElectricalCapacitiveNode
    a bgf:CompositeTemplate ;
    rdfs:label "Electrical storage with Zero Node" ;
    rdfs:subClassOf bgf:ElectricalCapacitor ;
    rdfs:subClassOf bgf:ZeroStorageNode .

#===============================================================================

bgf:ElectricalInductiveNode
    a bgf:CompositeTemplate ;
    rdfs:label "Electrical inductor with One Node" ;
    rdfs:subClassOf bgf:ElectricalInductor ;
    rdfs:subClassOf bgf:OneStorageNode .

#===============================================================================

bgf:ElectricalResistiveNode
    a bgf:CompositeTemplate ;
    rdfs:label "Electrical resistance with One Node" ;
    rdfs:subClassOf bgf:ElectricalResistor ;
    rdfs:subClassOf bgf:OneResistanceNode .

#===============================================================================
#===============================================================================
`,r=`@prefix bgf: <https://bg-rdf.org/ontologies/bondgraph-framework#> .
@prefix cdt: <https://w3id.org/cdt/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

#===============================================================================

# Physical System level

#===============================================================================

bgf:Hydraulic
    a bgf:PhysicalDomain ;
    bgf:hasConstant [
        bgf:varName "RT" ;
        bgf:hasValue "2578.73058 J/mol"^^cdt:ucum
    ] ;
    bgf:hasFlow [
        bgf:varName "v" ;
        rdfs:label "Fluid flow (L/s)" ;
        bgf:hasUnits "L/s"^^cdt:ucumunit
    ] ;
    bgf:hasPotential [
        bgf:varName "u" ;
        rdfs:label "Fluid pressure (kPa)" ;
        bgf:hasUnits "J/L"^^cdt:ucumunit
    ] ;
    bgf:hasQuantity [
        bgf:varName "q" ;
        rdfs:label "Fluid volume (L)" ;
        bgf:hasUnits "L"^^cdt:ucumunit
    ] .

#===============================================================================

bgf:HydraulicPotential
    a bgf:ElementTemplate ;
    rdfs:subClassOf bgf:PotentialSource ;
    bgf:hasDomain bgf:Hydraulic .

bgf:HydraulicFlow
    a bgf:ElementTemplate ;
    rdfs:subClassOf bgf:FlowSource ;
    bgf:hasDomain bgf:Hydraulic .

#===============================================================================

bgf:BernoulliHydraulicResistor
    a bgf:ElementTemplate ;
    rdfs:subClassOf bgf:Resistance ;
    bgf:hasDomain bgf:Hydraulic ;
    rdfs:label "Hydraulic resistor with a Bernoulli loss" ;
    bgf:lawLabel "PB" ;
    bgf:hasStyle [
        a bgf:ElementStyle ;
        bgf:textColour "#444" ;
        bgf:backgroundColour "#FCE4D6" ;
        bgf:borderColour "#C00000" ;
        bgf:borderStyle "double"
    ] ;
    bgf:hasParameter [
        bgf:varName "R" ;
        rdfs:label "Viscous (Poiseuille) resistance" ;
        bgf:hasUnits "kPa.s/L"^^cdt:ucumunit
    ], [
        bgf:varName "B" ;
        rdfs:label "Bernoulli (inertial) loss coefficient" ;
        bgf:hasUnits "kPa.s2/L2"^^cdt:ucumunit
    ] ;
    # u = R*v + B*v*|v|, solved for the flow: v = 2*u/(R + sqrt(R^2 + 4*B*|u|)); with B = 0 it is the Hydraulic
    # resistance, v = k*u, with k = 1/R
    bgf:constitutiveRelation """
        <math xmlns="http://www.w3.org/1998/Math/MathML">
            <apply>
                <eq/>
                <ci>v</ci>
                <apply>
                    <divide/>
                    <apply>
                        <times/>
                        <cn>2</cn>
                        <ci>u</ci>
                    </apply>
                    <apply>
                        <plus/>
                        <ci>R</ci>
                        <apply>
                            <root/>
                            <apply>
                                <plus/>
                                <apply>
                                    <power/>
                                    <ci>R</ci>
                                    <cn>2</cn>
                                </apply>
                                <apply>
                                    <times/>
                                    <cn>4</cn>
                                    <ci>B</ci>
                                    <apply>
                                        <abs/>
                                        <ci>u</ci>
                                    </apply>
                                </apply>
                            </apply>
                        </apply>
                    </apply>
                </apply>
            </apply>
        </math>
    """^^bgf:mathml .

#===============================================================================

bgf:HydraulicStorage
    a bgf:ElementTemplate ;
    rdfs:subClassOf bgf:QuantityStore ;
    bgf:hasDomain bgf:Hydraulic ;
    rdfs:label "Hydraulic storage vessel" ;
    bgf:hasParameter [
        bgf:varName "E" ;
        rdfs:label "Elastance" ;
        bgf:hasUnits "J"^^cdt:ucumunit
    ] ;
    # ode(q, t) = v
    # u = E/q
    bgf:constitutiveRelation """
        <math xmlns="http://www.w3.org/1998/Math/MathML">
            <apply>
                <eq/>
                <apply>
                    <diff/>
                    <bvar>
                        <ci>t</ci>
                    </bvar>
                    <ci>q</ci>
                </apply>
                <ci>v</ci>
            </apply>
            <apply>
                <eq/>
                <ci>u</ci>
                <apply>
                    <divide/>
                    <ci>E</ci>
                    <ci>q</ci>
                </apply>
            </apply>
        </math>
    """^^bgf:mathml .

#===============================================================================

bgf:HydraulicResistor
    a bgf:ElementTemplate ;
    rdfs:subClassOf bgf:Resistance ;
    bgf:hasDomain bgf:Hydraulic ;
    rdfs:label "Hydraulic resistance" ;
    bgf:hasParameter [
        bgf:varName "k" ;
        rdfs:label "Conductance (L/s/kPa)" ;
        bgf:hasUnits "L2.s-1.J-1"^^cdt:ucumunit
    ] ;
    bgf:constitutiveRelation """
        <math xmlns="http://www.w3.org/1998/Math/MathML">
            <apply>
                <eq/>
                <ci>v</ci>
                <apply>
                    <times/>
                    <ci>k</ci>
                    <ci>u</ci>
                </apply>
            </apply>
        </math>
    """^^bgf:mathml .

#===============================================================================

bgf:ElasticVessel
    a bgf:ElementTemplate ;
    rdfs:subClassOf bgf:QuantityStore ;
    bgf:hasDomain bgf:Hydraulic ;
    rdfs:label "Hydraulic elastic storage vessel" ;
    bgf:hasParameter [
        bgf:varName "E" ;
        rdfs:label "Elastance (J)" ;
        bgf:hasUnits "J"^^cdt:ucumunit
    ], [
        bgf:varName "q_hat" ;
        rdfs:label "Unstressed volume (L)" ;
        bgf:hasUnits "L"^^cdt:ucumunit
    ], [
        bgf:varName "q_bar" ;
        rdfs:label "Maximum volume (L)" ;
        bgf:hasUnits "L"^^cdt:ucumunit
    ] ;
    # u = E*(q - q_hat)/sqr(q_bar - q);
    # ode(q, t) = v
    bgf:constitutiveRelation """
        <math xmlns="http://www.w3.org/1998/Math/MathML">
            <apply>
                <eq/>
                <apply>
                    <diff/>
                    <bvar>
                        <ci>t</ci>
                    </bvar>
                    <ci>q</ci>
                </apply>
                <ci>v</ci>
            </apply>
            <apply>
                <eq/>
                <ci>u</ci>
                <apply>
                    <divide/>
                    <apply>
                        <times/>
                        <ci>E</ci>
                        <apply>
                            <minus/>
                            <ci>q</ci>
                            <ci>q_hat</ci>
                        </apply>
                    </apply>
                    <apply>
                        <power/>
                        <apply>
                            <minus/>
                            <ci>q_bar</ci>
                            <ci>q</ci>
                        </apply>
                        <cn>2</cn>
                    </apply>
                </apply>
            </apply>
        </math>
    """^^bgf:mathml .

#===============================================================================

bgf:OsmoticTransporter
    a bgf:ElementTemplate ;
    rdfs:subClassOf bgf:Reaction ;
    bgf:hasDomain bgf:Hydraulic ;   # this gives us flow/potential symbols (v: L/s, u: kPa)
    rdfs:label "Osmotic transport" ;
    bgf:hasSymbol "R" ;
    bgf:hasPort [
        bgf:portId 'water_in' ;
        bgf:direction bgf:InwardPort
    ], [
        bgf:portId 'water_out' ;
        bgf:direction bgf:OutwardPort
    ] ;
    bgf:hasParameter [
        bgf:varName "k_membrane" ;
        rdfs:label "Membrane permeability (L/s/kPa)" ;
        bgf:hasUnits "L2.s-1.J-1"^^cdt:ucumunit
    ] ;
    bgf:hasVariable [
        bgf:varName "q_solute_in" ;
        rdfs:label "Inner solute quantity (mol)" ;
        bgf:hasUnits "mol"^^cdt:ucumunit
    ], [
        bgf:varName "q_water_in" ;
        rdfs:label "Inner water quantity (L)" ;
        bgf:hasUnits "L"^^cdt:ucumunit
    ], [
        bgf:varName "q_solute_out" ;
        rdfs:label "Outer solute quantity (mol)" ;
        bgf:hasUnits "mol"^^cdt:ucumunit
    ], [
        bgf:varName "q_water_out" ;
        rdfs:label "Outer water quantity (L)" ;
        bgf:hasUnits "L"^^cdt:ucumunit
    ] ;
    # v = k_membrane*((u_water_in - u_water_out) - RT*(q_solute_in/q_water_in - q_solute_out/q_water_out))
    bgf:constitutiveRelation """
        <math xmlns="http://www.w3.org/1998/Math/MathML">
            <apply>
                <eq/>
                <ci>v</ci>
                <apply>
                    <times/>
                    <ci>k_membrane</ci>
                    <apply>
                        <minus/>
                        <apply>
                            <minus/>
                            <ci>u_water_in</ci>
                            <ci>u_water_out</ci>
                        </apply>
                        <apply>
                            <times/>
                            <ci>RT</ci>
                            <apply>
                                <minus/>
                                <apply>
                                    <divide/>
                                    <ci>q_solute_in</ci>
                                    <ci>q_water_in</ci>
                                </apply>
                                <apply>
                                    <divide/>
                                    <ci>q_solute_out</ci>
                                    <ci>q_water_out</ci>
                                </apply>
                            </apply>
                        </apply>
                    </apply>
                </apply>
            </apply>
        </math>
    """^^bgf:mathml .

#===============================================================================

#===============================================================================

bgf:OldOsmosis
    a bgf:ElementTemplate ;
    rdfs:subClassOf bgf:Reaction ;
    bgf:hasDomain bgf:Hydraulic ;   # this gives us flow/potential symbols (v: L/s, u: kPa)
    rdfs:label "Osmotic transport (original)" ;
    bgf:hasSymbol "R" ;
    bgf:hasParameter [
        bgf:varName "k_membrane" ;
        rdfs:label "Membrane permeability (L/s/kPa)" ;
        bgf:hasUnits "L2.s-1.J-1"^^cdt:ucumunit
    ] ;
    bgf:hasVariable [
        bgf:varName "q_solute_in" ;
        rdfs:label "Inner solute quantity (mol)" ;
        bgf:hasUnits "mol"^^cdt:ucumunit
    ], [
        bgf:varName "q_water_in" ;
        rdfs:label "Inner water quantity (L)" ;
        bgf:hasUnits "L"^^cdt:ucumunit
    ], [
        bgf:varName "q_solute_out" ;
        rdfs:label "Outer solute quantity (mol)" ;
        bgf:hasUnits "mol"^^cdt:ucumunit
    ], [
        bgf:varName "q_water_out" ;
        rdfs:label "Outer water quantity (L)" ;
        bgf:hasUnits "L"^^cdt:ucumunit
    ] ;
    # v = -k_membrane*RT*(q_solute_in/q_water_in - q_solute_out/q_water_out)
    bgf:constitutiveRelation """
        <math xmlns="http://www.w3.org/1998/Math/MathML">
            <apply>
                <eq/>
                <ci>v</ci>
                <apply>
                    <times/>
                    <ci>k_membrane</ci>
                    <apply>
                        <times/>
                        <ci>RT</ci>
                        <apply>
                            <minus/>
                            <apply>
                                <divide/>
                                <ci>q_solute_out</ci>
                                <ci>q_water_out</ci>
                            </apply>
                            <apply>
                                <divide/>
                                <ci>q_solute_in</ci>
                                <ci>q_water_in</ci>
                            </apply>
                        </apply>
                    </apply>
                </apply>
            </apply>
        </math>
    """^^bgf:mathml .

#===============================================================================
#===============================================================================

bgf:HydraulicResistanceNode
    a bgf:CompositeTemplate ;
    rdfs:label "Hydraulic resistance with One Node" ;
    rdfs:subClassOf bgf:HydraulicResistor ;
    rdfs:subClassOf bgf:OneResistanceNode .

bgf:BernoulliHydraulicResistanceNode
    a bgf:CompositeTemplate ;
    rdfs:label "Hydraulic resistance with a Bernoulli loss and One Node" ;
    rdfs:subClassOf bgf:BernoulliHydraulicResistor ;
    rdfs:subClassOf bgf:OneResistanceNode .

bgf:HydraulicStorageNode
    a bgf:CompositeTemplate ;
    rdfs:label "Hydraulic storage with Zero Node" ;
    rdfs:subClassOf bgf:HydraulicStorage ;
    rdfs:subClassOf bgf:ZeroStorageNode .

bgf:HydraulicElasticStorageNode
    a bgf:CompositeTemplate ;
    rdfs:label "Hydraulic elastic storage with Zero Node" ;
    rdfs:subClassOf bgf:ElasticVessel ;
    rdfs:subClassOf bgf:ZeroStorageNode .

bgf:OsmoticTransporterNode
    a bgf:CompositeTemplate ;
    rdfs:label "Hydraulic osmotic transport with One Node" ;
    rdfs:subClassOf bgf:OsmoticTransporter ;
    rdfs:subClassOf bgf:OneReactionNode .

bgf:OldOsmosisNode
    a bgf:CompositeTemplate ;
    rdfs:label "Hydraulic osmotic transport with One Node" ;
    rdfs:subClassOf bgf:OldOsmosis ;
    rdfs:subClassOf bgf:OneReactionNode .

#===============================================================================
#===============================================================================
`,i=`@prefix bgf: <https://bg-rdf.org/ontologies/bondgraph-framework#> .
@prefix cdt: <https://w3id.org/cdt/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

#===============================================================================

# Physical System level

#===============================================================================

bgf:Mechanical
    a bgf:PhysicalDomain ;
    bgf:hasFlow [
        bgf:varName "v" ;
        bgf:hasUnits "m/s"^^cdt:ucumunit
    ] ;
    bgf:hasPotential [
        bgf:varName "u" ;
        bgf:hasUnits "J/m"^^cdt:ucumunit
    ] ;
    bgf:hasQuantity [
        bgf:varName "q" ;
        bgf:hasUnits "m"^^cdt:ucumunit
    ] .

#===============================================================================

bgf:MechanicalPotential
    a bgf:ElementTemplate ;
    rdfs:subClassOf bgf:PotentialSource ;
    bgf:hasDomain bgf:Mechanical .

bgf:MechanicalFlow
    a bgf:ElementTemplate ;
    rdfs:subClassOf bgf:FlowSource ;
    bgf:hasDomain bgf:Mechanical .

#===============================================================================

bgf:MechanicalResistor
    a bgf:ElementTemplate ;
    rdfs:subClassOf bgf:Resistance ;
    bgf:hasDomain bgf:Mechanical ;
    rdfs:label "Mechanical resistor" ;
    bgf:hasParameter [
        bgf:varName "R" ;
        bgf:hasUnits "J.s.m-2"^^cdt:ucumunit
    ] ;
    bgf:constitutiveRelation """
        <math xmlns="http://www.w3.org/1998/Math/MathML">
            <apply>
                <eq/>
                <ci>u</ci>
                <apply>
                    <times/>
                    <ci>v</ci>
                    <ci>R</ci>
                </apply>
            </apply>
        </math>
    """^^bgf:mathml .

#===============================================================================

bgf:MechanicalCapacitor
    a bgf:ElementTemplate ;
    rdfs:subClassOf bgf:QuantityStore ;
    bgf:hasDomain bgf:Mechanical ;
    rdfs:label "Mechanical capacitor" ;
    bgf:hasParameter [
        bgf:varName "C" ;
        bgf:hasUnits "m2/J"^^cdt:ucumunit
    ] ;
    bgf:constitutiveRelation """
        <math xmlns="http://www.w3.org/1998/Math/MathML">
            <apply>
                <eq/>
                <apply>
                    <diff/>
                    <bvar>
                        <ci>t</ci>
                    </bvar>
                    <ci>q</ci>
                </apply>
                <ci>v</ci>
            </apply>
            <apply>
                <eq/>
                <ci>u</ci>
                <apply>
                    <divide/>
                    <ci>q</ci>
                    <ci>C</ci>
                </apply>
            </apply>
        </math>
    """^^bgf:mathml .

#===============================================================================

bgf:MechanicalInductor
    a bgf:ElementTemplate ;
    rdfs:subClassOf bgf:FlowStore ;
    bgf:hasDomain bgf:Mechanical ;
    rdfs:label "Mechanical inductor" ;
    bgf:hasParameter [
        bgf:varName "L" ;
        bgf:hasUnits "J.s2.m-2"^^cdt:ucumunit
    ] ;
    bgf:hasVariable [
        bgf:varName "a" ;
        rdfs:label "Acceleration" ;
        bgf:hasUnits "m/s2"^^cdt:ucumunit
    ] ;
    bgf:constitutiveRelation """
        <math xmlns="http://www.w3.org/1998/Math/MathML">
            <apply>
                <eq/>
                <apply>
                    <diff/>
                    <bvar>
                        <ci>t</ci>
                    </bvar>
                    <ci>v</ci>
                </apply>
                <ci>a</ci>
            </apply>
            <apply>
                <eq/>
                <ci>u</ci>
                <apply>
                    <times/>
                    <ci>L</ci>
                    <ci>a</ci>
                </apply>
            </apply>
        </math>
    """^^bgf:mathml .

#===============================================================================
#===============================================================================

bgf:MechanicalCapacitiveNode
    a bgf:CompositeTemplate ;
    rdfs:label "Mechanical storage with Zero Node" ;
    rdfs:subClassOf bgf:MechanicalCapacitor ;
    rdfs:subClassOf bgf:ZeroStorageNode .

#===============================================================================

bgf:MechanicalInductiveNode
    a bgf:CompositeTemplate ;
    rdfs:label "Mechanical inductor with One Node" ;
    rdfs:subClassOf bgf:MechanicalInductor ;
    rdfs:subClassOf bgf:OneStorageNode .

#===============================================================================

bgf:MechanicalResistiveNode
    a bgf:CompositeTemplate ;
    rdfs:label "Mechanical resistance with One Node" ;
    rdfs:subClassOf bgf:MechanicalResistor ;
    rdfs:subClassOf bgf:OneResistanceNode .

#===============================================================================
#===============================================================================
`,a=`https://bg-rdf.org/ontologies/bondgraph-framework`,o=`https://bg-rdf.org/`,s=[`${o}templates/chemical.ttl`,`${o}templates/electrical.ttl`,`${o}templates/hydraulic.ttl`,`${o}templates/mechanical.ttl`],c=new Map,l=`/src/assets/bg-rdf/`,u=`${l}ontology.ttl`,d=Object.assign({"/src/assets/bg-rdf/ontology.ttl":e});for(let[e,t]of Object.entries(d))if(e.endsWith(u)){c.set(a,t);break}var f=Object.assign({"/src/assets/bg-rdf/templates/chemical.ttl":t,"/src/assets/bg-rdf/templates/electrical.ttl":n,"/src/assets/bg-rdf/templates/hydraulic.ttl":r,"/src/assets/bg-rdf/templates/mechanical.ttl":i});for(let[e,t]of Object.entries(f))for(let n of s){let r=`${l}${n.substring(19)}`;if(e.endsWith(r)){c.set(n,t);break}}function p(){let e={};for(let t of s){let n=c.get(t);n!==void 0&&(e[t.substring(t.lastIndexOf(`/`)+1)]=n)}return{ontology:c.get(`https://bg-rdf.org/ontologies/bondgraph-framework`)??``,templates:e}}export{c as n,p as r,a as t};