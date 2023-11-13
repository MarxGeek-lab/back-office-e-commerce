import React, { useEffect, useState } from "react";

import "./AddProduct.scss";
import { CardContent } from "../../../components/CardContent/CardContent";
import { TreeSelect, TreeSelectChangeEvent } from "primereact/treeselect";
import { TreeNode } from "primereact/treenode";
import { InputText } from "primereact/inputtext";
import { Editor } from "primereact/editor";
import { FiEdit } from "react-icons/fi";

export const NodeService = {
  getTreeNodesData() {
    return [
      {
        key: "0",
        label: "Accessoires Elèctronique",
        data: "Documents Folde",
        icon: "pi pi-fw pi-star-fill",
        children: [
          {
            key: "0-0",
            label: "Work",
            data: "Work Folder",
          },
          {
            key: "0-1",
            label: "Home",
            data: "Home Folder",
          },
        ],
      },
      {
        key: "1",
        label: "Vêtements Femme",
        data: "Events Folder",
        icon: "pi pi-fw pi-calendar",
        children: [
          { key: "1-0", label: "Meeting", icon: "pi pi-fw pi-calendar-plus", data: "Meeting" },
          {
            key: "1-1",
            label: "Product Launch",
            icon: "pi pi-fw pi-calendar-plus",
            data: "Product Launch",
          },
          {
            key: "1-2",
            label: "Report Review",
            icon: "pi pi-fw pi-calendar-plus",
            data: "Report Review",
          },
        ],
      },
      {
        key: "2",
        label: "Movies",
        data: "Movies Folder",
        icon: "pi pi-fw pi-star-fill",
        children: [
          {
            key: "2-0",
            icon: "pi pi-fw pi-star-fill",
            label: "Al Pacino",
            data: "Pacino Movies",
          },
          {
            key: "2-1",
            label: "Robert De Niro",
            icon: "pi pi-fw pi-star-fill",
            data: "De Niro Movies",
          },
        ],
      },
    ];
  },

  getTreeTableNodesData() {
    return [
      {
        key: "0",
        data: {
          name: "Applications",
          size: "100kb",
          type: "Folder",
        },
        children: [
          {
            key: "0-0",
            data: {
              name: "React",
              size: "25kb",
              type: "Folder",
            },
            children: [
              {
                key: "0-0-0",
                data: {
                  name: "react.app",
                  size: "10kb",
                  type: "Application",
                },
              },
              {
                key: "0-0-1",
                data: {
                  name: "native.app",
                  size: "10kb",
                  type: "Application",
                },
              },
              {
                key: "0-0-2",
                data: {
                  name: "mobile.app",
                  size: "5kb",
                  type: "Application",
                },
              },
            ],
          },
          {
            key: "0-1",
            data: {
              name: "editor.app",
              size: "25kb",
              type: "Application",
            },
          },
          {
            key: "0-2",
            data: {
              name: "settings.app",
              size: "50kb",
              type: "Application",
            },
          },
        ],
      },
      {
        key: "1",
        data: {
          name: "Cloud",
          size: "20kb",
          type: "Folder",
        },
        children: [
          {
            key: "1-0",
            data: {
              name: "backup-1.zip",
              size: "10kb",
              type: "Zip",
            },
          },
          {
            key: "1-1",
            data: {
              name: "backup-2.zip",
              size: "10kb",
              type: "Zip",
            },
          },
        ],
      },
      {
        key: "2",
        data: {
          name: "Desktop",
          size: "150kb",
          type: "Folder",
        },
        children: [
          {
            key: "2-0",
            data: {
              name: "note-meeting.txt",
              size: "50kb",
              type: "Text",
            },
          },
          {
            key: "2-1",
            data: {
              name: "note-todo.txt",
              size: "100kb",
              type: "Text",
            },
          },
        ],
      },
      {
        key: "3",
        data: {
          name: "Documents",
          size: "75kb",
          type: "Folder",
        },
        children: [
          {
            key: "3-0",
            data: {
              name: "Work",
              size: "55kb",
              type: "Folder",
            },
            children: [
              {
                key: "3-0-0",
                data: {
                  name: "Expenses.doc",
                  size: "30kb",
                  type: "Document",
                },
              },
              {
                key: "3-0-1",
                data: {
                  name: "Resume.doc",
                  size: "25kb",
                  type: "Resume",
                },
              },
            ],
          },
          {
            key: "3-1",
            data: {
              name: "Home",
              size: "20kb",
              type: "Folder",
            },
            children: [
              {
                key: "3-1-0",
                data: {
                  name: "Invoices",
                  size: "20kb",
                  type: "Text",
                },
              },
            ],
          },
        ],
      },
      {
        key: "4",
        data: {
          name: "Downloads",
          size: "25kb",
          type: "Folder",
        },
        children: [
          {
            key: "4-0",
            data: {
              name: "Spanish",
              size: "10kb",
              type: "Folder",
            },
            children: [
              {
                key: "4-0-0",
                data: {
                  name: "tutorial-a1.txt",
                  size: "5kb",
                  type: "Text",
                },
              },
              {
                key: "4-0-1",
                data: {
                  name: "tutorial-a2.txt",
                  size: "5kb",
                  type: "Text",
                },
              },
            ],
          },
          {
            key: "4-1",
            data: {
              name: "Travel",
              size: "15kb",
              type: "Text",
            },
            children: [
              {
                key: "4-1-0",
                data: {
                  name: "Hotel.pdf",
                  size: "10kb",
                  type: "PDF",
                },
              },
              {
                key: "4-1-1",
                data: {
                  name: "Flight.pdf",
                  size: "5kb",
                  type: "PDF",
                },
              },
            ],
          },
        ],
      },
      {
        key: "5",
        data: {
          name: "Main",
          size: "50kb",
          type: "Folder",
        },
        children: [
          {
            key: "5-0",
            data: {
              name: "bin",
              size: "50kb",
              type: "Link",
            },
          },
          {
            key: "5-1",
            data: {
              name: "etc",
              size: "100kb",
              type: "Link",
            },
          },
          {
            key: "5-2",
            data: {
              name: "var",
              size: "100kb",
              type: "Link",
            },
          },
        ],
      },
      {
        key: "6",
        data: {
          name: "Other",
          size: "5kb",
          type: "Folder",
        },
        children: [
          {
            key: "6-0",
            data: {
              name: "todo.txt",
              size: "3kb",
              type: "Text",
            },
          },
          {
            key: "6-1",
            data: {
              name: "logo.png",
              size: "2kb",
              type: "Picture",
            },
          },
        ],
      },
      {
        key: "7",
        data: {
          name: "Pictures",
          size: "150kb",
          type: "Folder",
        },
        children: [
          {
            key: "7-0",
            data: {
              name: "barcelona.jpg",
              size: "90kb",
              type: "Picture",
            },
          },
          {
            key: "7-1",
            data: {
              name: "primeng.png",
              size: "30kb",
              type: "Picture",
            },
          },
          {
            key: "7-2",
            data: {
              name: "prime.jpg",
              size: "30kb",
              type: "Picture",
            },
          },
        ],
      },
      {
        key: "8",
        data: {
          name: "Videos",
          size: "1500kb",
          type: "Folder",
        },
        children: [
          {
            key: "8-0",
            data: {
              name: "primefaces.mkv",
              size: "1000kb",
              type: "Video",
            },
          },
          {
            key: "8-1",
            data: {
              name: "intro.avi",
              size: "500kb",
              type: "Video",
            },
          },
        ],
      },
    ];
  },

  getTreeTableNodes() {
    return Promise.resolve(this.getTreeTableNodesData());
  },

  getTreeNodes() {
    return Promise.resolve(this.getTreeNodesData());
  },
};

const AddProduct: React.FC = () => {
  const [nodes, setNodes] = useState<TreeNode[] | undefined>();
  const [selectedNodeKey, setSelectedNodeKey] = useState<string | null>();

  useEffect(() => {
    NodeService.getTreeNodes().then((data) => setNodes(data));
  }, []);

  return (
    <CardContent>
      <div className="AddItem">
        <form className="Form">
          <h2 className="mb-4 Form-title flex align-items-end">
            <FiEdit /> Information sur le produit
          </h2>
          <label className="flex flex-column mb-3">
            <span className="Form-field">
              Désignation du produit <i>*</i>{" "}
            </span>
            <InputText className="p-inputtext" type="text" placeholder="désignation du produit" />
            <span />
          </label>
          <div className="flex gap-3 mb-3 w-full">
            <label className="flex flex-column w-6">
              <span className="Form-field">
                Marque<i>*</i> :
              </span>
              <InputText type="text" placeholder="Marque du produit" />
              <span />
            </label>
            <label className="flex flex-column w-6">
              <span className="Form-field">
                Marque<i>*</i> :
              </span>
              <InputText type="text" placeholder="" />
              <span />
            </label>
          </div>
          <label className="flex flex-column mb-3">
            <span className="Form-field">
              Prix unitaire<i>*</i> :
            </span>
            <InputText type="text" placeholder="Prix" />
            <span />
          </label>
          <label className="flex flex-column mb-3">
            <span className="Form-field">Description du produit </span>
            <Editor placeholder="Description du produit" readOnly style={{ height: "150px" }} />
          </label>
          <div className="Form-otherDetail">
            <h3 className="mt-10 mb-10 Form-subtitle">Autres détails</h3>
            <label className="flex flex-column mb-3">
              <span className="Form-field">
                Taille<i>*</i> : (Facultatif)
              </span>
            </label>
          </div>
        </form>
      </div>
    </CardContent>
  );
};

export default AddProduct;
